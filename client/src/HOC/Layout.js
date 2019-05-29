import React, { Component } from 'react';

class Layout extends Component {
  render() {
    console.log(this.props.auth)
    return (
         <div className="page_container">{this.props.children}</div>
    );
  }
}

export default Layout;