import React from 'react'
import Panel from '../../components/Panel'
import styles from './Tour.css'

const DATES = [{
  date: '24th July 4pm',
  location: 'The Journey\'s End Inn, Ringmore'
}, {
  date: '25th July 8pm',
  location: 'Looe Bay Holiday Park, Looe'
}, {
  date: '26th July',
  location: 'Man Engine Festival, Liskeard'
}, {
  date: '27th July 6pm',
  location: 'The Crabshell Inn, Kingsbridge'
}, {
  date: '28th July 9pm',
  location: 'The Carriers Inn, Bude'
}, {
  date: '29th July 8:30pm',
  location: 'The Albion, Liskeard'
}]

export default function Tour () {
  return (
    <Panel className={styles.root}>
      <div className={styles.title}>Summer Tour 2016</div>
      <div className={styles.dates}>
        {DATES.map((date) => <TourDate {...date} key={date.date} />)}
      </div>
    </Panel>
  )
}

function TourDate ({ date, location }) {
  return (
    <div className={styles.date}>
      {date} - {location}
    </div>
  )
}
