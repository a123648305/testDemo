import React from "react";

class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(1);
    console.log(2);
  }

  render() {
    return <h2>demo</h2>;
  }
}

export default Demo;
