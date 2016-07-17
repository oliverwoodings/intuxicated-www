import React from 'react'
import Panel from '../../components/Panel'
import BandMember from './BandMember'
import styles from './Band.css'

const BAND = [{
  name: 'Dan',
  instrument: 'Drums',
  bio: 'Once escaped a Vietnamese prison using a single broken drumstrick and a splash cymbal',
  image: ''
}, {
  name: 'Andy',
  instrument: 'Piano',
  bio: 'Big. Dog.',
  image: ''
}, {
  name: 'Oli',
  instrument: 'Bass',
  bio: 'Has aged 10 years since meeting Matt 5 years ago',
  image: ''
}, {
  name: 'Ewan',
  instrument: 'Bass',
  bio: 'Big fan of Moby Dick',
  image: ''
}, {
  name: 'Kieran',
  instrument: 'Vocals',
  bio: 'Hides peanut butter behind his ears during gigs',
  image: ''
}, {
  name: 'Ellie',
  instrument: 'Vocals',
  bio: 'Arethra Franklin\'s daughter from another mother',
  image: ''
}, {
  name: 'Ben',
  instrument: 'Trumpet',
  bio: 'Can consume more wine than the entire water content of his body',
  image: ''
}, {
  name: 'Matt',
  instrument: 'Trombone',
  bio: 'Arrives at gigs precisely when he intends to, never early or late',
  image: ''
}, {
  name: 'Nathan',
  instrument: 'Tenor',
  bio: 'Throws parties so wild they end in hospital visits and cottage cheese',
  image: ''
}, {
  name: 'Beth',
  instrument: 'Soprano',
  bio: 'Has a name that almost sounds like beef, which is surprising since she\'s veggie',
  image: ''
}, {
  name: 'Holly',
  instrument: 'Alto',
  bio: 'Can consume more cider before lunchtime than a boat full of Cornish fishermen'
}, {
  name: 'Charlotte',
  instrument: 'Vocals',
  bio: 'The ellusive northern lass that melts the mothers hearts'
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
