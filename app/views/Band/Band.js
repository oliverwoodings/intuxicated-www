import React from 'react'
import Panel from '../../components/Panel'
import BandMember from './BandMember'
import styles from './Band.css'

const BAND = [{
  name: 'Dan',
  instrument: 'Drums',
  image: '/images/band/dan.jpg'
}, {
  name: 'Andy',
  instrument: 'Piano',
  image: '/images/band/andy.jpg'
}, {
  name: 'Oli',
  instrument: 'Bass',
  image: '/images/band/oli.jpg'
}, {
  name: 'Ewan',
  instrument: 'Bass',
  image: '/images/band/ewan.jpg'
}, {
  name: 'Kieran',
  instrument: 'Vocals',
  image: '/images/band/kieran.jpg'
}, {
  name: 'Ellie',
  instrument: 'Vocals',
  image: '/images/band/ellie.jpg'
}, {
  name: 'Ben',
  instrument: 'Trumpet',
  image: '/images/band/ben.jpg'
}, {
  name: 'Matt',
  instrument: 'Trombone',
  image: '/images/band/matt.jpg'
}, {
  name: 'Jess',
  instrument: 'Vocals',
  image: '/images/band/jess.jpg'
}, {
  name: 'Josh',
  instrument: 'Vocals',
  image: '/images/band/josh.jpg'
}, {
  name: 'Nathan',
  instrument: 'Tenor',
  image: '/images/band/nathan.jpg'
}, {
  name: 'Beth',
  instrument: 'Soprano',
  image: '/images/band/beth.jpg'
}, {
  name: 'Holly',
  instrument: 'Alto',
  image: '/images/band/holly.jpg'
}, {
  name: 'Ross',
  instrument: 'Guitar',
  image: '/images/band/ross.jpg'
}, {
  name: 'Charlotte',
  instrument: 'Vocals',
  image: '/images/band/charlotte.jpg'
}]

export default function Band () {
  return (
    <Panel className={styles.root}>
      <div className={styles.title}>Meet the band</div>
      <div className={styles.members}>
        {BAND.map((member) => <BandMember {...member} key={member.name} />)}
      </div>
    </Panel>
  )
}
