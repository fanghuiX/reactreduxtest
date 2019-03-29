import React from 'react'
import { connect } from 'react-redux'
import { getdata, cleardata } from './actions/getlists'
import List from './List'
import Button from 'antd/lib/button'
import Breadcrumb from 'antd/lib/breadcrumb'
import 'antd/dist/antd.css'

class getL extends React.Component {
  render() {
    const { lists, getdata, cleardata } = this.props
    return (
      <div>
        <Breadcrumb routes={this.props.routes} params={this.props.params}/><br/>
        <Button type="primary" onClick={() => getdata()}>显示数据</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="primary" onClick={() => cleardata()}>清除数据</Button>
        <br/>
        <div style={{marginTop: 15}}>
          <ul>
            {lists.map((e, i) =>
              <List text={e.text} key={i}/>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

const getlist = state => {
  return {
    lists: state.getd.lists
  }
}

export default connect(
  getlist,
  { getdata, cleardata }
)(getL)
