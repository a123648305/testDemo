import { useEffect, useState } from "react";

/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-07-29 14:15:50
 * @LastEditors: wujian
 * @LastEditTime: 2021-07-29 15:40:17
 */
import { connect } from "dva";
const Index = (props) => {
  const [message, setMessage] = useState("message");
  useEffect(() => {
    console.log("props", props);
    setTimeout(() => {
      setMessage("abc");
    }, 2000);
  }, []);
  return (
    <div className="Index">
      {message}
      {props.val}
    </div>
  );
};
const mapStateToProps = ({ example }) => ({
  msg: example.test,
  val: example.val,
});
export default connect(mapStateToProps)(Index);
