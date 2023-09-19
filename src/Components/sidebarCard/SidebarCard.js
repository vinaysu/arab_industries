import React from 'react'
import styles from './SidebarCard.module.css'

function SidebarCard({icon,name}) {
  return (
    <div className={styles.main}>
        {icon}
        <span>{name}</span>

    </div>
  )
}

export default SidebarCard