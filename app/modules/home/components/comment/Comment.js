import React from 'react'

class Comments extends React.Component {

  render() {
    const { name, commandstr } = this.props
    return (
      <div>
        <p><strong>{name}：</strong></p>
        <p style={{marginLeft: 20}}>{commandstr}</p>
        <hr/>
      </div>
    )
  }
}

export default Comments
