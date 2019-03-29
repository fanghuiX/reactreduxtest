import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from './actions/count'
import Button from 'antd/lib/button'
import Breadcrumb from 'antd/lib/breadcrumb'
import 'antd/dist/antd.css'

class indecrase extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temp: 'fanghui'
    }
  }
  componentWillMount() {
    /*alert('componentWillMount')*/
  }
  componentDidMount() {
    /*alert('componentDidMount')*/
  }
  componentDidUpdate(prevProps, prevState) {
  }
  componentWillUpdate(prevProps, prevState) {
    this.state.temp = (prevState.temp === 'fanghui' ? 'fh' : 'fanghui')
    /*alert('componentDidUpdate')*/
  }

  static defaultProps = {
    email: 'fanghuiplus@163.com'
  }

  render() {
    const { number, increase, decrease } = this.props
    return (
      <div>
        <Breadcrumb routes={this.props.routes} params={this.props.params}/><br/>
        <p>{this.props.email}</p>
        <p>{this.state.temp}</p>
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
