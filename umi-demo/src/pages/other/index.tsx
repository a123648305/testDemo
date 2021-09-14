/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-08-23 10:37:18
 * @LastEditors: wujian
 * @LastEditTime: 2021-08-23 11:13:03
 */
import React from 'react';
import { useEffect } from 'react';
import { Button } from 'antd';

type PropsType = {
  list: any[];
};

const Other: React.FC<PropsType> = ({ list }) => {
  useEffect(() => {
    console.log('list', list);
  });

  const liClick = (item: any) => {
    console.log(item.target.innerText, 'click');
  };

  return (
    <ul onClick={(e) => liClick(e)}>
      {list.map((item: any) => {
        return (
          <li key={item}>
            <Button>{item}</Button>
          </li>
        );
      })}
    </ul>
  );
};

export default Other;
