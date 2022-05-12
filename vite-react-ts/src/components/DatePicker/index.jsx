/*
 * @Description: 日期选择组件
 * @Author: linhongzhu
 * @Date: 2021-03-17 09:59:10
 * @LastEditors: linhongzhu
 * @LastEditTime: 2021-06-16 11:55:43
 */
import React from 'react';
import {message,Button,Popover} from 'antd'
import RangeDatePicker from './components/RangeDatePicker';

import {
  getQuickDateRange,
  QUICK_TIME_CHOICE,
  regex,
  getNumOfDays,
  monthArr,
  addClass, removeClass
} from './utils';
import PropTypes from 'prop-types';

import './index.less';


const dateContentStyle = {
  display : 'block',
   right : '9999px',
    top:'-9999px'
}

class NewDatePicker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: props.show, // 控制当前组件的隐藏或显示（可有props传入，也可自己改变）
      currSelector: 0, // 当前时间选择器（默认为快捷时间选择器）
      params: props.params,
      // 日期格式化格式
      formatStr: 'YYYY-MM-DD HH:mm:ss',
      quickTime: props.quickTime || null,
    };
  }

  componentDidMount() {
    // const { save, hasHour } = this.props;
    // save({
    //   selectedQuickTimeChoice: hasHour ? 11 : 8,
    // });
    // if (this.dateContentRef) {
    //   this.dateContentRef.style.display = 'block';
    //   this.dateContentRef.style.right = '9999px';
    //   this.dateContentRef.style.top = '-9999px';
    // }
    this.dateContentRef.style=dateContentStyle

  }

  _resetStyle = () => {
    setTimeout(() => {
      if (this.dateContentRef) {
        this.dateContentRef.style.display = this.state.show !== 'date' ? 'none' : 'block';
        this.dateContentRef.style.right = '-1px';
        this.dateContentRef.style.top = '30px';
      }
    }, 0);
  };

  componentDidUpdate(prevProps, prevState) {
    // const { quickTime: preQuickTime, show: preShow } = prevProps;
    // const { quickTime: nowQuickTime, show: nowShow } = this.props;
    // if (JSON.stringify(preQuickTime) !== JSON.stringify(nowQuickTime)) {
    //   this.setState({
    //     quickTime: nowQuickTime,
    //   });
    // }
    // if (JSON.stringify(preShow) !== JSON.stringify(nowShow)) {
    //   this._resetStyle();
    // }
  }

  componentWillUnmount() {
    // this.props.changeFilter('date');
    // this._resetStyle();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.show !== state.show) {
      return {
        show: props.show,
      };
    }
    if (JSON.stringify(props.params) !== JSON.stringify(state.params)) {
      return {
        params: props.params,
      };
    }
    return null;
  }

  // 获取时间默认值
  fetchDefaultValue() {
    const { type } = this.props;
    const { params, formatStr } = this.state;
    this.props.getDefaultValue({
      key: `default-time-${type}`,
      params,
      formatStr,
      defaultValue:
        (storage.getWidthProject(types.messageDateFilter) &&
          storage.getWidthProject(types.messageDateFilter)[type]) ||
        undefined,
      projectId: storage.get(types.curProject).id,
    });
  }

  // 点击快捷时间选择器选项获取时间范围
  handleClickQuickTime = index => {
    const { staredQuickTimeChoice, type, changeFilter, hasHour } = this.props;
    this.setState({
      quickTime: QUICK_TIME_CHOICE(hasHour)[index],
    });

    const { formatStr } = this.state;
    const selectedDateRange = getQuickDateRange(index, formatStr, hasHour);

    this.props.save({
      selectedQuickTimeChoice: index,
      selectedDateRange,
    });
    const storagedTimeObj = {
      module: type, // 模块
      currSelector: 0,
      selectedQuickTimeChoice: index,
      staredQuickTimeChoice,
      value: [],
    };
    this.props.setDefaultValue({
      key: `default-time-${type}`,
      projectId: storage.get(types.curProject).id,
      value: JSON.stringify(storagedTimeObj),
    });
    if (selectedDateRange.length > 0) {
      // 重置时间参数
      this.setState(
        {
          params: null,
          show: null,
        },
        () => {
          this.props.save({
            dateFilter: this.getCurrDate(),
          });
          setTimeout(() => {
            this.props.onChange(this.getCurrDate());
          }, 0);
          const sto = storage.getWidthProject(types.messageDateFilter);
          storage.setWidthProject(types.messageDateFilter, {
            ...sto,
            [this.props.type]: this.getCurrDate(),
          });
          changeFilter('date');
          this._resetStyle();
        }
      );
    } else {
      message.error('请选择时间范围');
    }
  };

  // 获取时间筛选器的当前时间区间（对外暴露的方法）
  getCurrDate = () => {
    const { currSelector, params, formatStr } = this.state;
    const { selectedDateRange, selectedQuickTimeChoice, changeFilter, hasHour } = this.props;
    const numOfDays = getNumOfDays(selectedDateRange, formatStr);

    const currDate = {
      from: selectedDateRange[0],
      to: selectedDateRange[1],
      quickChoice:
        params && params.quickChoice.indexOf('-') > -1
          ? params.quickChoice
          : QUICK_TIME_CHOICE(hasHour)[selectedQuickTimeChoice],
      dateGroupType: 'DAY',
      numOfDays,
      remoteName: 'cTime',
      currSelector: 0,
    };
    return currDate;
  };

  // 选择完具体时间，点击确定 确定查询
  clickRangeConfirmBtn = () => {
    // console.log('quickTime', this.state.quickTime);
    const { staredQuickTimeChoice, dateFilter } = this.props;
    const quickTimeObj =
      staredQuickTimeChoice > -1
        ? dateFilter
        : storage.getWidthProject(types.messageDateFilter) &&
          storage.getWidthProject(types.messageDateFilter)[this.props.type]
        ? storage.getWidthProject(types.messageDateFilter)[this.props.type]
        : undefined;
    if (quickTimeObj) {
      if (quickTimeObj.quickChoice.indexOf('-') === -1) {
        this.setState({
          quickTime: quickTimeObj.quickChoice,
        });
      } else {
        this.setState({
          quickTime: '',
        });
      }
    }

    if (!this.rangeDatePicker.getCurrDate()) {
      message.error('请选择时间范围');
      return;
    }
    const selectedDateRange = [
      this.rangeDatePicker.getCurrDate().from,
      this.rangeDatePicker.getCurrDate().to,
    ];

    this.props.save({
      selectedDateRange,
      selectedQuickTimeChoice: this.rangeDatePicker.getCurrDate().quickChoice,
    });
    if (selectedDateRange.length > 0) {
      // 重置时间参数
      this.setState(
        {
          params: null,
          show: null,
          quickTime: quickTimeObj
            ? this.rangeDatePicker.state.isShowTime ||
              (!this.rangeDatePicker.state.isShowTime &&
                this.rangeDatePicker.getCurrDate().from.split(' ')[0] !== quickTimeObj.from) ||
              (!this.rangeDatePicker.state.isShowTime &&
                this.rangeDatePicker.getCurrDate().to.split(' ')[0] !== quickTimeObj.to)
              ? ''
              : quickTimeObj.quickChoice
            : '',
        },
        () => {
          this.props.save({
            dateFilter: this.rangeDatePicker.getCurrDate(),
          });
          setTimeout(() => {
            this.props.onChange(this.rangeDatePicker.getCurrDate());
          }, 0);

          const sto = storage.getWidthProject(types.messageDateFilter);
          storage.setWidthProject(types.messageDateFilter, {
            ...sto,
            [this.props.type]: this.rangeDatePicker.getCurrDate(),
          });
          this.props.changeFilter('date');
          this._resetStyle();
        }
      );
    }
  };

  // 点击星标事件
  clickStarIcon = (e, index) => {
    e.stopPropagation();
    let { staredQuickTimeChoice } = this.props;
    const { selectedQuickTimeChoice, type } = this.props;
    if (staredQuickTimeChoice !== index) {
      // 移除上一个被标为星标的样式并隐藏
      if (staredQuickTimeChoice !== -1) {
        const formerChoiceNode = document.querySelectorAll('.left_time ul li')[
          staredQuickTimeChoice
        ].children[1];
        removeClass(formerChoiceNode, 'star');
        formerChoiceNode.style.display = 'none';
      }
      staredQuickTimeChoice = index;
      addClass(e.target.parentNode, 'star');
    } else {
      staredQuickTimeChoice = -1;
      removeClass(e.target.parentNode, 'star');
    }
    this.setState({
      staredQuickTimeChoice,
    });
    this.props.save({
      staredQuickTimeChoice,
    });
    // 存储
    const storagedTimeObj = {
      module: type, // 模块
      currSelector: 0,
      selectedQuickTimeChoice,
      staredQuickTimeChoice,
      value: [],
    };
    this.props.setDefaultValue({
      key: `default-time-${type}`,
      projectId: storage.get(types.curProject).id,
      value: JSON.stringify(storagedTimeObj),
    });
  };

  render() {
    const {  quickTime } = this.state;
    const show='dat2e'
    const {
      selectedDateRange,
      selectedQuickTimeChoice,
      staredQuickTimeChoice,
      save,
      changeFilter,
      dateFilter,
      hasHour,
      filterDateFilter,
    } = this.props;
    let qkcTime = [];
    let qkc = true; // 快捷选择是false
    let newDateFilter = dateFilter;
    if (filterDateFilter) {
      newDateFilter = filterDateFilter;
    }
    if (newDateFilter) {
      if (/\-/.test(newDateFilter.quickChoice)) {
        qkc = false;
      }
      QUICK_TIME_CHOICE(hasHour).map((item, index) => {
        if (item === newDateFilter.quickChoice) {
          // index
          qkcTime =
            regex.test(newDateFilter.from.trim()) && regex.test(newDateFilter.to.trim())
              ? [newDateFilter.from.split('-').join('/'), newDateFilter.to.split('-').join('/')]
              : getQuickDateRange(index, 'YYYY/MM/DD HH:mm:ss', hasHour);
        }
      });
    }
    console.log('quickTime', quickTime);
    console.log('dateFilter', dateFilter);
    console.log(show,'show',this.props);
    return (
      <div
        className={`filter_date_picker_wrapper ${show !== 'date' ? '' : 'active'}`}
        onClick={e => e.stopPropagation()}
      >
        {/* {show !== 'date' ? (
          <Popover
            overlay={
              <div style={{ minWidth: 116, textAlign: 'center' }}>
                {newDateFilter ? (
                  qkc ? (
                    <div>
                      {qkcTime[0]}
                      <br /> to <br />
                      {qkcTime[1]}
                    </div>
                  ) : (
                    <div>
                      {`${newDateFilter.from.split('-').join('/')}`} <br />
                      to <br />
                      {`${newDateFilter.to.split('-').join('/')}`}
                    </div>
                  )
                ) : (
                  '50'
                )}
              </div>
            }
            align={{ offset: [1, 6] }}
            placement="bottomRight"
            mouseEnterDelay={0.7}
          >
            <div
              className="filter_date_trigger"
              onClick={() => {
                changeFilter('date');
                this._resetStyle();
              }}
            >
              <span className="filter_date_time">
                <i className="icon-cem_time-controller" />
                <span style={{ marginLeft: 8, verticalAlign: 'top' }}>
                  {quickTime && !hasHour
                    ? quickTime
                    : dateFilter
                    ? dateFilter.quickChoice.indexOf('-') > -1
                      ? `${dateFilter.quickChoice
                          .split('-')[0]
                          .trim()
                          .split('.')
                          .join('/')}~${dateFilter.quickChoice
                          .split('-')[1]
                          .trim()
                          .split('.')
                          .join('/')}`
                      : dateFilter.quickChoice
                    : '50'}
                </span>
              </span>
            </div>
          </Popover>
        ) : (
          <div
            className="filter_date_trigger"
            onClick={() => {
              changeFilter('date');
              this._resetStyle();
            }}
          >
            <span className="filter_date_time">
              <i className="icon-cem_time-controller" />
              <span style={{ marginLeft: 8, verticalAlign: 'top' }}>
                {quickTime && !hasHour
                  ? quickTime
                  : dateFilter
                  ? dateFilter.quickChoice.indexOf('-') > -1
                    ? `${dateFilter.quickChoice
                        .split('-')[0]
                        .trim()
                        .split('.')
                        .join('/')}~${dateFilter.quickChoice
                        .split('-')[1]
                        .trim()
                        .split('.')
                        .join('/')}`
                    : dateFilter.quickChoice
                  : '60'}
              </span>
            </span>
          </div>
        )} */}
        {this.props.children}
        <div className="time_picker_wrap" ref={ref => (this.dateContentRef = ref)}>
          <div className="time_picker_content">
            {/* 左侧时间选择器 */}
            <div className="right_picker">
              {dateFilter ? (
                <RangeDatePicker
                  ref={ref => (this.rangeDatePicker = ref)}
                  defaultDate={
                    dateFilter.quickChoice.indexOf('-') > -1
                      ? [
                          dateFilter.quickChoice
                            .split('-')[0]
                            .replaceAll('.', '-')
                            .trim(),
                          dateFilter.quickChoice
                            .split('-')[1]
                            .replaceAll('.', '-')
                            .trim(),
                        ]
                      : [dateFilter.from, dateFilter.to]
                  }
                  currSelector={1}
                  save={save}
                  isShowTime={
                    dateFilter.quickChoice.indexOf('-') > -1 &&
                    regex.test(
                      dateFilter.quickChoice
                        .split('-')[0]
                        .replaceAll('.', '-')
                        .trim()
                    ) &&
                    regex.test(
                      dateFilter.quickChoice
                        .split('-')[1]
                        .replaceAll('.', '-')
                        .trim()
                    )
                  }
                />
              ) : null}
            </div>
            {/* 快捷时间选择器 */}
            <div className="left_time">
              <ul className="quick_date_wrap">
                {QUICK_TIME_CHOICE(hasHour).map((item, index) => (
                  <li
                    key={index}
                    onClick={() => this.handleClickQuickTime(index)}
                    className={monthArr.includes(item) ? 'left_li' : 'right_li'}
                  >
                    <span className={selectedQuickTimeChoice === index ? 'active' : ''}>
                      {item}
                    </span>
                    <Popover
                      className="time_picker_star_tooltip"
                      placement="top"
                      overlay={staredQuickTimeChoice === index ? '取消默认' : '设为默认'}
                      mouseEnterDelay={0.6}
                    >
                      <span
                        className={staredQuickTimeChoice === index ? 'star' : ''}
                        onClick={e => this.clickStarIcon(e, index)}
                      >
                        <i className="icon-cem icon-cem_star" />
                      </span>
                    </Popover>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="time_picker_footer">
            <div />
            <div style={{ display: 'flex' }}>
              <Button
                type="default"
                onClick={() => {
                  changeFilter('date');
                  this._resetStyle();
                }}
              >
                取消
              </Button>
              <Button type="primary" onClick={this.clickRangeConfirmBtn}>
                查询
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default NewDatePicker;

NewDatePicker.propTypes = {
  show: PropTypes.bool, // 时间筛选组件是否显示
  changeFilter: PropTypes.func, // 触发打开或关闭时间筛选组件，传出string ‘time’
  // model: PropTypes.string, // 模块对应的type
  onChange: PropTypes.func, // 选择时间 传出对象 {from, to, quickChoice, dateGroupType, numOfDays, remoteName, currSelector}
  params: PropTypes.object, // 外部传入{from, to, quickChoice, dateGroupType, numOfDays, remoteName}
  filterDateFilter: PropTypes.object, // 外部传入的页面真正请求的时间 {from, to, quickChoice, dateGroupType, numOfDays, remoteName}
};
