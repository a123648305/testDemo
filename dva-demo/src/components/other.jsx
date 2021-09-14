/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-07-29 15:04:32
 * @LastEditors: wujian
 * @LastEditTime: 2021-07-29 15:43:22
 */
import React from "react";
import{connect} from 'dva'
class Other extends React.Component {
  constructor() {
    super();
    this.state = {
      data: 100,
    };
  }
  componentDidMount() {
    console.log("other didmount");
  }
  componentDidUpdate(){
      console.log('oter didupdate');
  }
  shouldComponentUpdate(){
      console.log('souldUpdate');
      return false
  }
  componentWillUnmount() {
    console.log("other willUnmount");
  }
  changeData =function(val){
      this.setState({data:val})
  }
  render() {
    const { data } = this.state;
    return (<div><h1>{data}</h1><h2>{this.props.val}</h2><p onClick={()=>this.changeData(10)}>change</p></div>);
  }
}

const mapStateToProps = ({ example }) => ({
    msg: example.test,
    val: example.val,
  });
export default connect(mapStateToProps)(Other);