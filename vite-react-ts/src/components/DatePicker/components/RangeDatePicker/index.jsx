/*
 * @Description:
 * @Author: linhongzhu
 * @Date: 2021-03-18 12:00:21
 * @LastEditors: linhongzhu
 * @LastEditTime: 2021-04-08 12:03:07
 */
import React from 'react';
import moment from 'moment';
import { DatePicker, Checkbox } from 'antd';
import { formatDate, getNumOfDays, regex } from '../../utils';
const { RangePicker } = DatePicker;


import './index.less';
moment.locale('zh-cn', {
    week: {
      dow: 1, // 星期的第一天是星期一
      doy: 7, // 年份的第一周必须包含1月1日 (7 + 1 - 1)
    },
})

class RangeDatePicker extends React.PureComponent {
  constructor(props) {
    super(props);
    // log(props);
    this.state = {
      isShowTime: props.isShowTime || false, // 是否显示具体时间
      date: props.defaultDate || undefined,
    };
  }

  componentDidUpdate(preProps) {
    const { defaultDate: preDate } = preProps;
    const { defaultDate: nowDate } = this.props;
    if (JSON.stringify(preDate) !== JSON.stringify(nowDate) && nowDate) {
      this.setState({
        date: nowDate,
        isShowTime: regex.test(nowDate[0]) && regex.test(nowDate[1]),
      });
    }
  }

  formatStr = () => (this.state.isShowTime ? 'YYYY/MM/DD HH:mm:ss' : 'YYYY/MM/DD');
  formatStrVal = () => (this.state.isShowTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD');

  getCurrDate() {
    const { date } = this.state;
    if (date && date.length) {
      const selectedDateRange = [
        moment(date[0]).format(this.formatStrVal()),
        moment(date[1]).format(this.formatStrVal()),
      ];
      const formatedDateRange = formatDate(2, selectedDateRange, this.formatStrVal());
      const numOfDays = getNumOfDays(selectedDateRange, this.formatStrVal());
      const currDate = {
        from: this.state.isShowTime ? selectedDateRange[0] : `${selectedDateRange[0]} 00:00:00`,
        to: this.state.isShowTime ? selectedDateRange[1] : `${selectedDateRange[1]} 23:59:59`,
        quickChoice: formatedDateRange,
        dateGroupType: 'DAY',
        numOfDays,
        remoteName: 'cTime',
        currSelector: 1,
      };
      return currDate;
    }
  }

  disabledDate = current => current && current > moment().endOf('day');

  onDateChange = (date, dateString) => {
    this.setState({
      date: dateString.every(e => e !== '') ? dateString : undefined,
    });
  };

  // 选择具体时间
  handleCheckboxChange = e => {
    const { date } = this.state;
    const startVal =
      e.target.checked && date && date[0] && !regex.test(date[0])
        ? `${date[0]} 00:00:00`
        : undefined;
    const endVal =
      e.target.checked && date && date[1] && !regex.test(date[1])
        ? `${date[1]} 23:59:59`
        : undefined;
    this.setState({
      isShowTime: e.target.checked,
    });
    startVal && endVal && this.setState({ date: [startVal, endVal] });
  };

  render() {
    const { date, isShowTime } = this.state;
    const { className } = this.props;
    return (
      <div
        className={`time_range_picker_wrapper ${className}`}
        style={{ width: isShowTime ? 450 : 562 }}
      >
        <RangePicker
          getPopupContainer={triggerNode => triggerNode.parentNode}
          className="filter_time_picker"
          disabledDate={this.disabledDate}
          format={this.formatStr()}
          showTime={isShowTime}
          onChange={this.onDateChange}
          value={
            !date || !date[0] || !date[1]
              ? null
              : date && date.length
              ? [moment(date[0], this.formatStr()), moment(date[1], this.formatStr())]
              : null
          }
          dropdownClassName="filter_time_picker_content_wrap"
          open={true}
        />
        <div className="detail-time-select">
          <Checkbox checked={isShowTime} onChange={e => this.handleCheckboxChange(e)}>
            选择时间
          </Checkbox>
        </div>
      </div>
    );
  }
}

export default RangeDatePicker;
