import React from 'react'
import Breadcrumb from 'antd/lib/breadcrumb'

class error404 extends React.Component {
  componentWillMount() {

  }
  componentDidMount() {

  }
  componentDidUpdate(prevprops, prevState) {

  }
  render() {
    return (
      <div>
        <Breadcrumb routes={this.props.routes} params={this.props.params}/><br/>
        <h1>404 not found!</h1>
      </div>
    )
  }
}

export default error404
