import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import styles from './Icon.css'

export default class Icon extends Component {
  static propTypes = {
    svg: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    rotate: React.PropTypes.oneOf([90, 180, 270]),
    spin: React.PropTypes.bool
  };

  render () {
    const {
      spin,
      svg,
      rotate,
      ...props,
      className
    } = this.props

    const classes = classnames(styles.root, className, {
      [styles.spin]: spin,
      [styles.rotate90]: rotate === 90,
      [styles.rotate180]: rotate === 180,
      [styles.rotate270]: rotate === 270
    })

    const svgContents = svg.match(/<svg viewBox=["'](.+?)['"]>([\s\S]*.?[\s\S]*)<\/svg>/)

    return (
      <svg
        {...props}
        className={classes}
        viewBox={svgContents[1]}
        dangerouslySetInnerHTML={{ __html: svgContents[2] }}
      />
    )
  }
}
