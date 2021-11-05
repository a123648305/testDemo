/*
 * @Author: chenwu
 * @Date: 2021-10-13 17:42:30
 * @LastEditTime: 2021-10-25 11:55:04
 * @LastEditors: Please set LastEditors
 */

import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
const dateFormat = 'YYYY/MM/DD';
function View(props: any) {
  const { value = undefined } = props;
  const hanleValue = (date, dateString) => {
    props.value = dateString;
  };

  return (
    <>
      <DatePicker
        allowClear={false}
        value={value ? moment(value, dateFormat) : undefined}
        format={dateFormat}
        style={{ width: '291px' }}
        onChange={hanleValue}
      />
    </>
  );
}

export default View;
