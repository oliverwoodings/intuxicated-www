import React from 'react'
import classnames from 'classnames'
import styles from './Panel.css'

export default function Panel ({ children, className, image, noOverflow, ...props }) {
  const classes = classnames(styles.root, className, {
    [styles.noOverflow]: noOverflow
  })

  const style = {
    backgroundImage: image ? `url('${image}')` : null
  }

  return (
    <div {...props} className={classes}>
      {children}
      <div className={styles.background} style={style} />
    </div>
  )
}
