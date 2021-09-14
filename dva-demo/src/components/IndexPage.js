/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-07-27 17:09:59
 * @LastEditors: wujian
 * @LastEditTime: 2021-07-29 15:11:34
 */
import React, { useEffect } from "react";
import { connect } from "dva";
import styles from "./IndexPage.css";
import Example from "../components/Example";
import { Link } from "dva/router";
function IndexPage(props) {
  useEffect(() => {
    console.log(props, "Index00");
  }, []);
  return (
    <div className={styles.normal}>
      <Example>
        <h2 style={{ color: "red" }}>999</h2>
        <p>000</p>
      </Example>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <p>{JSON.stringify(props)}</p>
      <h2>{props.val}</h2>
      <button
        onClick={() => {
          props.dispatch({ type: "example/add" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          props.dispatch({ type: "example/fetch" });
        }}
      >
        -
      </button>
      <p></p>
      <Link to="/index">to index</Link>
      <p></p>
      <Link to="/example">to example</Link>
      <p></p>
      <Link to="/other">to other</Link>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect(({ example }) => ({
  msg: example.test,
  val: example.val,
}))(IndexPage);
