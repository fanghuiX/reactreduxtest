import React from 'react'
import JsonItem from './jsonItem'
import Button from 'antd/lib/button'
import Breadcrumb from 'antd/lib/breadcrumb'
import 'antd/dist/antd.css'

class jsonList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      news: [
        {
          name: 'WASD',
          id: '000000000'
        }
      ]
    }
  }

  handle_click = () => {
    fetch('http://localhost:3003/data', {method: 'get'})
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ news: data })
      })
      .catch(e => console.log('error:', e))
  }

  render() {
    return (
      <div>
        <Breadcrumb routes={this.props.routes} params={this.props.params}/><br/>
        <Button type="primary" onClick={this.handle_click}>获取JSON数据</Button>
        <br/>
        {
          this.state.news.map((item, i) =>
            <div key={i}>
              <JsonItem name={item.name} id={item.id}/>
            </div>
          )
        }
      </div>
    )
  }
}

export default jsonList
