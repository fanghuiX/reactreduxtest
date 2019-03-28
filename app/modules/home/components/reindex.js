import React from 'react'
import styles from './index.css'
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'
import Commands from './comment/Comment'
import 'antd/dist/antd.css'

const { TextArea } = Input

class rehome extends React.Component {
  componentWillMount() {

  }
  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState) {

  }

  state = {
    flag: false,
    commands: [],
    name: 'fanghui',
    commandstr: '咖啡色是的发送阿什顿发达法师打发，是的发送发撒旦法师法撒旦法三大是打发第三撒大大。'
  }

  handle_click = () => {
    this.setState({
      name: document.getElementById('nameee').value,
      commandstr: document.getElementById('commmm').value
    })
  }

  getCommandsAll = () => {
    this.setState({
      flag: !this.state.flag
    })
    fetch('http://localhost:3005/commands', {method: 'get'})
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ commands: data })
      })
      .catch(e => console.log('error:', e))
  }

  render() {
    return (
      <div className={styles.nextcontainer}>
        <div className={styles.topp}>
          <p>用户名：</p>
          <Input id="nameee" placeholder="your name"/>
          <p style={{ marginTop: 15 }}>评论：</p>
          <TextArea id="commmm" placeholder="write your comment" autosize={{ minRows: 5, maxRows: 5 }}/>
          <Button type="primary" className={styles.buttonl} onClick={this.handle_click}>发布</Button>
        </div>

        <div className={styles.bottomm}>
          <p><strong>我的评论：</strong></p>
          <Commands name={this.state.name} commandstr={this.state.commandstr} />
          <Button type="primary" style={{marginTop: 10, marginBottom: 10}} onClick={this.getCommandsAll}>
            {
              this.state.flag ? <span>收起所有评论</span> : <span>查看所有评论</span>
            }
          </Button>
          {
            this.state.flag ? <p><strong>所有评论：</strong></p> : null
          }
          {
            this.state.flag
            ? this.state.commands.map((item, i) =>
              <div key={i}>
                <Commands name={item.name} commandstr={item.commandstr}/>
              </div>
            ) : null
          }
        </div>
      </div>
    )
  }
}

export default rehome
