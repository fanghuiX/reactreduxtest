import styles from './index.css'
import React from 'react'
import { Link } from 'react-router'
/*import { Menu, Dropdown, Icon } from 'antd'*/
import 'antd/dist/antd.css'
import Menu from 'antd/lib/menu'
import Icon from 'antd/lib/icon'
import Button from 'antd/lib/button'

const SubMenu = Menu.SubMenu

class Home extends React.Component {
  state = {
    collapsed: false
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.divmenu}>
          <div style={{ width: 256 }}>
            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
              <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
            </Button>
            <Menu
              defaultSelectedKeys={[]}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >
              <Menu.Item key="1">
                <Link to="/re">
                  <Icon type="down" />
                  <span>评论分页页面</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/table">
                  <Icon type="table"/>
                  <span>表格</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/plus">
                  <Icon type="calculator" />
                  <span>计数器</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/list">
                  <Icon type="ordered-list" />
                  <span>列表数据</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/jsondata">
                  <Icon type="ordered-list" />
                  <span>获取JSON数据</span>
                </Link>
              </Menu.Item>
              <SubMenu key="sub1" title={<span><Icon type="warning" /><span>ERROR</span></span>}>
                <Menu.Item key="5"><Link to="/403">403</Link></Menu.Item>
                <Menu.Item key="6"><Link to="/404">404</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </div>
        <div className={styles.divcontainer}>
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
