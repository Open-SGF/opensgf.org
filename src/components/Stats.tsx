import React from 'react'
import Image from 'next/image'
import styles from '../styles/stats.module.scss'

const Stats = () => {
  return (
    <div className={ styles.container }>
     <div className={ styles.card }>
    <div className={ styles.image }>
      <Image
        src='/code.svg'
        width={72} 
        height={72}
        alt='code'>
      </Image>
    </div>
      <h1>100</h1>
      <p>Code For America Brigades</p>
     </div>
     <div className={ styles.card }>
    <div className={ styles.image }>
      <Image
        src='/blueprint.svg'
        width={72} 
        height={72}
        alt='blueprint'>
      </Image> 
    </div>
      <h1>4</h1>
      <p>Projects Completed</p>
      </div>
     <div className={ styles.card }>

    <div className={ styles.image }>
      <Image
        src='/healthcare.svg' 
        width={72} 
        height={72}
        alt='healthcare'>
      </Image> 
    </div>
      <h1>1,500</h1>
      <p>Hours Volunteered</p>
     </div> 
    </div>
  )
}

export default Stats
