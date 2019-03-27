import styles from './index.css'
import React from 'react'
import { Link } from 'react-router'
/*import { Menu, Dropdown, Icon } from 'antd'*/
import 'antd/dist/antd.css'

class Home extends React.Component {
  componentWillMount() {
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.divmenu}>
          <nav>
            <Link to="/" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>首页</Link>
            <br/>
            <Link to="/plus" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>计数器</Link>
            <br/>
            <Link to="/list" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>列表数据</Link>
            <br/>
            <Link to="/403" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>403</Link>
            <br/>
            <Link to="/404" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>404</Link>
          </nav>
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
