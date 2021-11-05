/*
 * @Author: chenwu
 * @Date: 2021-10-13 17:42:30
 * @LastEditTime: 2021-10-25 11:55:08
 * @LastEditors: Please set LastEditors
 */

import React, { useState } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
const dateFormat = 'YYYY/MM/DD';
const { RangePicker } = DatePicker;
function View(props: any, context: any) {
  const { value, func } = props;
  const hanleValue = (date, dateString) => {
    props.value = dateString;
    func();
  };
  return (
    <>
      <RangePicker
        format={dateFormat}
        allowClear={false}
        value={value ? [moment(value[0], dateFormat), moment(value[1], dateFormat)] : [null, null]}
        onChange={hanleValue}
      />
    </>
  );
}

export default View;
