/*
 * @Author: chenwu
 * @Date: 2021-10-13 17:42:30
 * @LastEditTime: 2021-10-23 13:33:26
 * @LastEditors: Please set LastEditors
 */

import React, { useState } from 'react';
import { InputNumber } from 'antd';
function View(props: any, context: any) {
  const { value } = props;
  console.log(props);
  const hanleValue = e => {
    props.value = e;
  };
  return (
    <>
      <InputNumber
        min={1}
        max={10}
        value={value}
        style={{ width: '371px' }}
        onChange={hanleValue}
      />
    </>
  );
}

export default View;
