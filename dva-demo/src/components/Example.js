/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-07-27 17:09:59
 * @LastEditors: wujian
 * @LastEditTime: 2021-07-29 14:54:52
 */
import React, { useEffect } from "react";

const Example = (props) => {
  useEffect(() => {
    console.log(props, "example didMount");
  }, []);
  useEffect(() => {
    console.log(props, "example update");
  });
  useEffect(() => {
    return function () {
      console.log("example willOnMount");
    };
  }, []);
  return (
    <div>
      Example
      {props.children}
    </div>
  );
};

Example.propTypes = {};

export default Example;
