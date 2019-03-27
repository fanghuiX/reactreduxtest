import React from 'react'
import JsonItem from './jsonItem'
import Button from 'antd/lib/button'
import 'antd/dist/antd.css'
/*import data from '../../../../../data'*/

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
    fetch('/data', {method: 'get'}).then(
      function (res) {
        console.log(res)
        res.json().then(function (data) {
          console.log(data)
          this.setState({
            news: data
          })
        })
      }
    )
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handle_click()}>获取JSON数据</Button>
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
