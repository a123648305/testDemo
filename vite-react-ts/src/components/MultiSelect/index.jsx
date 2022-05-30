/*
 * @Descrption:
 * @Author: wangbo
 * @Date: 2019-10-14 15:49:04
 * @LastEditors: linhongzhu
 * @LastEditTime: 2022-01-10 17:28:48
 */

import './index.less';


import React, { Component, Fragment } from 'react';
import { Popover, Button, Input,Checkbox} from 'antd';
import PropTypes from 'prop-types';
import { CloseCircleFilled } from '@ant-design/icons';


export default class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [], //选项
      filteredOptions: [], //过滤后的选项
      tempValue: props.defaultValue || [], //临时值，用于实时显示
      value: props.defaultValue || [], // 点击确认后最终输出的值
      maxLength: props.maxLength || 0,
      indeterminate: false, //是否为部分选中
      allChecked: false, //是否为全部选中
      panelShow: false, //面板是否打开，默认为false
      searchText: '', //搜索文本
      placeholder: props.placeholder || '请输入搜索关键词', // 输入提示语
      showClearBtn: props.showClearBtn || false,
      popoverVisible: false, // 删除popover
      popoverIndex: -1, // 区分多个删除popover
    };
  }

  componentDidMount() {
    window.addEventListener('click', this.handleCancel);
  }

  static getDerivedStateFromProps(props, state) {
    const { options, value } = props;
    if (JSON.stringify(options) !== JSON.stringify(state.options)) {
      return {
        options: options || [],
        filteredOptions: options || [],
      };
    }
    if (Array.isArray(value) && JSON.stringify(value) !== JSON.stringify(state.value)) {
      return {
        value: value || [],
        tempValue: value || [],
        allChecked: value && value.length > 0 && value.length === state.filteredOptions.length,
        indeterminate: value && value.length > 0 && value.length < state.filteredOptions.length,
      };
    }
    return null;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleCancel);
  }

  togglePanel = e => {
    const { panelShow, value, filteredOptions } = this.state;
    if (panelShow) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }
    setTimeout(
      () =>
        this.setState({
          panelShow: !panelShow,
        }),
      0
    );
  };

  // 清除
  handleClear = () => {
    this.setState(
      {
        tempValue: [],
      },
      () => this.handleCheckAllStatus()
    );
    this.props.onClear && this.props.onClear();
  };

  // 全选
  handleCheckAll() {
    const { tempValue, filteredOptions } = this.state;
    this.setState(
      {
        tempValue:
          tempValue.length === filteredOptions.length ? [] : filteredOptions.map(item => item.id),
      },
      () => this.handleCheckAllStatus()
    );
  }

  // 改变全选框的样式
  handleCheckAllStatus = () => {
    const { tempValue, filteredOptions } = this.state;
    this.setState({
      allChecked: tempValue.length > 0 && tempValue.length === filteredOptions.length,
      indeterminate: tempValue.length > 0 && tempValue.length < filteredOptions.length,
    });
  };

  // 单选
  handleCheckOne(id) {
    const { tempValue, maxLength } = this.state;
    if (
      (maxLength > 0 &&
        ((tempValue.length >= maxLength && tempValue.includes(id)) ||
          tempValue.length < maxLength)) ||
      maxLength === 0
    ) {
      const index = tempValue.indexOf(id);
      if (index > -1) {
        tempValue.splice(index, 1);
      } else {
        tempValue.push(id);
      }
      this.setState(
        {
          tempValue,
        },
        () => this.handleCheckAllStatus()
      );
    }
  }

  handleConfirm = () => {
    const { tempValue } = this.state;
    this.setState({
      value: JSON.parse(JSON.stringify(tempValue)),
      panelShow: false,
      // searchText: '',
    });
    this.props.onChange(tempValue);
  };

  handleCancel = () => {
    const { value, filteredOptions } = this.state;
    this.setState(
      {
        tempValue: JSON.parse(JSON.stringify(value)),
        panelShow: false,
        popoverVisible: false,
        popoverIndex: -1,
        allChecked: value && value.length > 0 && value.length === filteredOptions.length,
        indeterminate: value && value.length > 0 && value.length < filteredOptions.length,
      },
      () => this.handleClearInput()
    );
  };

  handleReset = () => {
    this.setState(
      {
        tempValue: [],
        value: [],
        panelShow: false,
        searchText: '',
      },
      () => this.handleCheckAllStatus()
    );
  };

  // 过滤选项
  handleFilter = e => {
    const searchText = e.target.value;
    const { options } = this.state;
    if (searchText.trim().length > 0) {
      const filteredOptions = options.filter(item =>
        item.name.toUpperCase().includes(searchText.toUpperCase())
      ); //注意大小写都可搜索
      this.setState({
        searchText,
        filteredOptions,
      });
    } else {
      this.setState({
        filteredOptions: options,
        searchText,
      });
    }
  };

  handleClearInput = () => {
    const { searchText, options } = this.state;
    if (searchText.length > 0) {
      this.setState(
        {
          searchText: '',
          filteredOptions: options,
        },
        () => this.handleCheckAllStatus()
      );
    }
  };

  handlePopoverVisibleChange = (visible, index) => {
    this.setState({
      popoverVisible: visible,
      popoverIndex: visible ? index : -1,
    });
  };

  getDeleteContent = item => {
    const { popoverVisible } = this.state;
    const { showClearOpt, onClearOpt } = this.props;
    return (
      <div style={{ maxWidth: 140 }}>
        <p>{showClearOpt.name}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            size="small"
            onClick={e => {
              e.stopPropagation();
              this.setState({ popoverVisible: !popoverVisible });
            }}
          >
            取消
          </Button>
          <Button
            type="primary"
            size="small"
            onClick={e => {
              e.stopPropagation();
              onClearOpt({ id: item.id }).then(data => {
                if (data.code === 20000) {
                  this.setState({ popoverVisible: !popoverVisible });
                }
              });
            }}
          >
            确定
          </Button>
        </div>
      </div>
    );
  };

  render() {
    const {
      options,
      filteredOptions,
      indeterminate,
      allChecked,
      tempValue,
      value,
      maxLength,
      style,
      searchText,
      popoverVisible,
      popoverIndex,
    } = this.state;
    const selectedItems =
      options.length > 0 ? options.filter(e => value.includes(e.id)).map(item => item.name) : [];

    const EMPTY_TEXT = '全部';
    const { note, showClearOpt } = this.props;
    return (
      <div
        className='multi-select-wrapper'
        style={style}
        onClick={this.togglePanel}
      >

        {/* <span
          className="currValue"
          title={
            selectedItems.length > 0
              ? selectedItems.length === options.length
                ? '全部'
                : selectedItems.join('，')
              : EMPTY_TEXT
          }
        >
          {selectedItems.length > 0
            ? selectedItems.length === options.length
              ? '全部'
              : selectedItems.join('，')
            : EMPTY_TEXT}
        </span> */}
        <div
          className="multi-select-panel"
          onClick={e => e.stopPropagation()}
        >
          <div className="multi-select-header">
            <Input
              ref={dom => (this.input = dom)}
              value={searchText}
              onChange={this.handleFilter}
              // placeholder="请输入搜索关键词"
              placeholder={this.state.placeholder}
              suffix={
                searchText.length > 0 ? (
                  <CloseCircleFilled onClick={this.handleClearInput} />
                ) : (
                  <i className="icon-cem_small-search" />
                )
              }
              style={{ height: 28 }}
            />
          </div>
          <ul className="multi-select-panel-body">
            {filteredOptions.length > 0 ? (
              <Fragment>
                {/* 若设置了可选择的值的个数，则不显示全选 */}
                {maxLength === 0 && (
                  <li className="all_check" onClick={() => this.handleCheckAll()}>
                    <div className="all_select">
                      <Checkbox
                        checked={allChecked}
                        indeterminate={indeterminate}
                        onChange={() => this.handleCheckAll()}
                      />
                      <label>全选</label>
                    </div>
                  </li>
                )}
                {filteredOptions.slice(0, 100).map((item, index) => (
                  <li
                    key={index}
                    className={
                      maxLength > 0 && tempValue.length >= maxLength && !tempValue.includes(item.id)
                        ? 'disabled'
                        : ''
                    }
                    onClick={() => this.handleCheckOne(item.id)}
                    style={{ minHeight: note ? '50px' : '36px' }}
                  >
                    <Checkbox
                      disabled={
                        maxLength > 0 &&
                        tempValue.length >= maxLength &&
                        !tempValue.includes(item.id)
                      }
                      checked={tempValue.includes(item.id)}
                      value={item.id}
                      onChange={() => this.handleCheckOne(item.id)}
                    />
                    <label title={item.name}>{item.name}</label>
                    {showClearOpt && showClearOpt.show && (
                      <Popover
                        placement="top"
                        content={() => this.getDeleteContent(item)}
                        mouseEnterDelay={0.4}
                        trigger="click"
                        visible={popoverVisible && popoverIndex === index}
                        onVisibleChange={visible => this.handlePopoverVisibleChange(visible, index)}
                        // getPopupContainer={triggerNode => document.querySelector('.multi-select-wrapper')}
                      >
                        <i
                          className="icon-cem_delete"
                          onClick={e => {
                            e.stopPropagation();
                            this.setState({ popoverVisible: !popoverVisible });
                          }}
                        />
                      </Popover>
                    )}

                    {note && <p className="note">{note(item)}</p>}
                  </li>
                ))}
                {filteredOptions.length > 99 && (
                  <li
                    className="no_data"
                    style={{ color: '#d96969', paddingLeft: '18px', fontSize: '12px' }}
                  >
                    {/* 该数值展示不会超过100条,需要 */}— 查看更多请搜索
                  </li>
                )}
              </Fragment>
            ) : (
              <li className="no_data">暂无数据</li>
            )}
          </ul>
          <div className="multi-select-panel-footer">
            {this.state.showClearBtn && (
              <div className="clearBtn" onClick={this.handleClear}>
                清除
              </div>
            )}
            <Button onClick={this.handleCancel}>取消</Button>
            <Button type="primary" onClick={this.handleConfirm}>
              确认
            </Button>
          </div>
        </div>
      </div>
    );
  }
}


MultiSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      //选项
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
    })
  ),
  defaultValue: PropTypes.arrayOf(PropTypes.string), //默认值
  value: PropTypes.arrayOf(PropTypes.string), //值。通过value传入时请确保value属性的初始值为[]
  maxLength: PropTypes.number, //最大可以选择的值的个数
  onChange: PropTypes.func.isRequired, //回调函数
  style: PropTypes.object,
  note: PropTypes.func, //备注方法
  placeholder: PropTypes.string, //搜索提示文字
  showClearBtn: PropTypes.bool, //清除选中按钮
  showClearOpt: PropTypes.object, //显示删除opt  { show： true（一般是true）, name: '' }
  onClearOpt: PropTypes.func, //删除opt的方法 ({id, name}) => {}
};
