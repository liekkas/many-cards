/**
 * Created by liekkas on 2016/12/25.
 */
import React, { PropTypes } from 'react'
import styles from './style.less'
import asset from '../../assets/wip.png'

class WIP extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <img src={asset} />
      </div>
    )
  }
}

export default WIP
