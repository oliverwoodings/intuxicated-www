import React, { Component } from 'react'
import classnames from 'classnames'
import Icon from '../../components/Icon'
import personSvg from '../../icons/person.svg'
import styles from './BandMember.css'

export default class BandMember extends Component {
  state = {
    open: false
  };

  render () {
    const { open } = this.state
    const classes = classnames(styles.root, {
      [styles.active]: open
    })

    return (
      <div className={classes} onClick={::this.onToggle}>
        <div className={styles.background} />
        {this.renderDetails()}
      </div>
    )
  }

  renderDetails () {
    const { name, instrument, bio, image } = this.props
    const { open } = this.state

    if (!open) {
      return (
        <div className={styles.content}>
          <div className={styles.detail}>{name}</div>
          <div className={styles.detail}>{instrument}</div>
        </div>
      )
    }

    return (
      <div className={styles.content}>
        <div className={styles.detail}>{bio}</div>
      </div>
    )
  }

  onToggle () {
    this.setState({ open: !this.state.open })
  }
}
