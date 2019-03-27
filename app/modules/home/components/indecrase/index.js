import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from './actions/count'
import Button from 'antd/lib/button'
import 'antd/dist/antd.css'

class indecrase extends React.Component {
  componentWillMount() {

  }
  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const { number, increase, decrease } = this.props
    return (
      <div>
        当前值为：<h2>{number}</h2>
        <Button type="primary" onClick={() => increase(2)}>加2</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="primary" onClick={() => decrease(1)}>减1</Button>
      </div>
    )
  }
}

const getNumber = state => {
  return {
    number: state.update.number
  }
}

export default connect(
  getNumber,
  { increase, decrease }
)(indecrase)
