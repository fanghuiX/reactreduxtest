import React from 'react'
import Divider from 'antd/lib/divider'

class Comments extends React.Component {

  render() {
    const { name, commandstr } = this.props
    return (
      <div>
        <p><strong>{name}：</strong></p>
        <p style={{marginLeft: 20}}>{commandstr}</p>
        <Divider/>
      </div>
    )
  }
}

export default Comments
