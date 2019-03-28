import React from 'react'
import styles from '../index.css'

class Comments extends React.Component {

  render() {
    const { name, commandstr } = this.props
    return (
      <div>
        <p><strong>{name}：</strong></p>
        <p style={{marginLeft: 20}}>{commandstr}</p>
        <hr className={styles.hrline}/>
      </div>
    )
  }
}

export default Comments
