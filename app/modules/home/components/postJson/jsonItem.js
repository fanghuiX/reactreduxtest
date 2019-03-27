import React from 'react'

class JsonItem extends React.Component {
  render() {
    const { name, id } = this.props
    return (
      <div style={{ marginTop: 20, marginLeft: 0 }}>
        姓名：<text>{name}</text>
        <br/>
        ID：<text>{id}</text>
      </div>
    )
  }
}

export default JsonItem
