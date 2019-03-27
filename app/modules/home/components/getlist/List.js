// 动态数据列表
import React, { Component, PropTypes } from 'react'

export default class List extends Component {
  render() {
    return (
      <li className="list-group-item" style={{marginTop: 5, marginLeft: -20}}>{this.props.text}</li>
    )
  }
}

List.propTypes = {
  text: PropTypes.string.isRequired
}
