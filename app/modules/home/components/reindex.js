import React from 'react'
import styles from './index.css'
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'
import Commands from './comment/Comment'
import Icon from 'antd/lib/icon'
import Pagination from 'antd/lib/pagination'
import Breadcrumb from 'antd/lib/breadcrumb'
import 'antd/dist/antd.css'

const { TextArea } = Input
const Search = Input.Search

class rehome extends React.Component {
  state = {
    mycomm: false,
    flag: false,
    commands: [],
    name: 'fanghui',
    commandstr: '咖啡色是的发送阿什顿发达法师打发，是的发送发撒旦法师法撒旦法三大是打发第三撒大大。',
    currentData: [],
    searchData: [],
    pageSize: 5,
    currentPage: 1
  }

  componentWillMount() {
    fetch('http://localhost:3005/commands', {method: 'get'})
      .then(res => res.json())
      .then(data => {
        this.setState({ commands: data })
      })
      .catch(e => console.log('error:', e))
  }
  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.currentData)
  }

  handle_click = () => {
    this.setState({
      mycomm: true,
      name: document.getElementById('nameee').value,
      commandstr: document.getElementById('commmm').value
    })
  }

  getCommandsAll = () => {
    this.setState({
      flag: !this.state.flag
    })
    const currentpage = this.state.currentPage
    const pagesize = this.state.pageSize
    this.setState({
      currentData: this.state.commands.slice((currentpage - 1) * pagesize, currentpage * pagesize)
    })
  }

  getPageComm = (page, pageSize) => {
    this.setState({
      currentPage: page,
      pageSize: pageSize,
      currentData: this.state.commands.slice((page - 1) * pageSize, page * pageSize)
    })
  }

  getSearch = (value) => {
    let temp = []
    for (var js in this.state.commands) {
      if (this.state.commands[js]['commandstr'].indexOf(value) !== -1) {
        console.log(this.state.commands[js]['commandstr'])
        temp.push(this.state.commands[js])
      }
    }
    console.log(temp)
    this.setState({
      searchData: temp
    })
    console.log(this.state.searchData)
  }

  render() {
    return (
      <div className={styles.nextcontainer}>
        <Breadcrumb routes={this.props.routes} params={this.props.params}/><br/>
        <div className={styles.topp}>
          <p>用户名：</p>
          <Input id="nameee" placeholder="your name"/>
          <p style={{ marginTop: 15 }}>评论：</p>
          <TextArea id="commmm" placeholder="write your comment" autosize={{ minRows: 5, maxRows: 5 }}/>
          <Button type="primary" className={styles.buttonl} onClick={this.handle_click}>发布</Button>
        </div>

        <div className={styles.bottomm}>
          <p><strong>我的评论：</strong></p>
          {
            this.state.mycomm
            ? <Commands name={this.state.name} commandstr={this.state.commandstr} /> : null
          }
          <Button type="primary" style={{marginTop: 10, marginBottom: 20}} onClick={this.getCommandsAll}>
            {
              this.state.flag ? <span>收起所有评论 <Icon type="up"/></span> : <span>展开所有评论 <Icon type="down"/></span>
            }
          </Button>
          {
            this.state.flag ? <Search id="search" placeholder="搜索评论..." enterButton="搜索评论" onSearch={value => this.getSearch(value)}/> : null
          }
          {
            <p style={{marginTop: 20}}><strong>搜索‘{document.getElementById('search')}’获得的评论：</strong></p>
          }
          {
            this.state.searchData.map((item, i) =>
              <div key={i}>
                <Commands name={item.name} commandstr={item.commandstr}/>
              </div>)
          }
          {
            this.state.flag ? <p style={{marginTop: 20}}><strong>所有评论：</strong></p> : null
          }
          {/*获取评论*/}
          {
            this.state.flag
            ? this.state.currentData.map((item, i) =>
              <div key={i}>
                <Commands name={item.name} commandstr={item.commandstr}/>
              </div>
            ) : null
          }
          {/*分页*/}
          {
            this.state.flag
              ? <center><Pagination onChange={this.getPageComm} current={this.state.currentPage} defaultPageSize={this.state.pageSize} total={this.state.commands.length}/></center> : null
          }
        </div>
      </div>
    )
  }
}

export default rehome
