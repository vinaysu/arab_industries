import React from 'react'
import styles from './Card_bottom.module.css'
import { Button } from '@mui/material'

function Card_bottom({ text, heading, description, buttonText, color }) {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <button style={{ backgroundColor: color }} >{text}</button>
        <h4>{heading}</h4>
        <p>{description}</p>
        <Button sx={{ backgroundColor: color }} variant='outlined'> {buttonText}</Button>

      </div>

      <hr></hr>
      <div className={styles.right}>
        <h5>what you will get</h5>
        <ul>
          <li>upto 8 users</li>
          <li>upto 3 gb storage</li>
          <li>email support</li>
          <li>basics of documentation, task flow visiting</li>
        </ul>


      </div>


    </div>
  )
}

export default Card_bottom