import React from "react"
import styles from './LayoutTw.modules.scss';
class LayoutTw extends React.Component {
  render(){
    return (
      <>
        <div className={styles.twBaseExtra}>
          {this.props.children}
        </div>
      </>
    )
  }
}
export default LayoutTw;