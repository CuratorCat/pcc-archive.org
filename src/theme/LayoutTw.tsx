import React from 'react'
import styles from './LayoutTw.modules.scss'
export default function LayoutTw(props): JSX.Element {
  return <div className={styles.twBaseExtra}>{props.children}</div>
}
