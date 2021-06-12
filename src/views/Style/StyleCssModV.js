import React from 'react'
import styles from './styleCssModFoo.module.css'

const StyleCssModV = () => {
  return (
    <div>
      <h3>StyleCssModV</h3>
      <div className={styles.foo}>
        foo
      </div>
      <div className={styles.foo + ' ' + styles.bar}>
        bar
      </div>
      <div className={`${styles.foo} ${styles.bar}`}>
        bar
      </div>
      <div className={[styles.foo, styles.bar].join(' ')}>
        bar
      </div>
    </div>
  )
}

export default StyleCssModV