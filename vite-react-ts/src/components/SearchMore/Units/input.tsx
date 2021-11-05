/*
 * @Author: chenwu
 * @Date: 2021-10-13 17:42:30
 * @LastEditTime: 2021-10-23 13:19:39
 * @LastEditors: Please set LastEditors
 */

import React, { useState } from 'react';
import { Input } from 'antd';
function View(props: any, context: any) {
  const { value, id } = props;

  const hanleValue = e => {
    props.value = e.target.value;
  };
  return (
    <>
      <Input value={value} placeholder="请输入" style={{ width: '371px' }} onChange={hanleValue} />
    </>
  );
}

export default View;
