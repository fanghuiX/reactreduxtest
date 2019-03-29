import React from 'react'
import Breadcrumb from 'antd/lib/breadcrumb'

class error403 extends React.Component {
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
        <h1>403</h1>
      </div>
    )
  }
}

export default error403
