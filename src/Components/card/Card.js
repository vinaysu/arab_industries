import React from 'react'
import styles from './Card.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Button } from '@mui/material';



function Card({ name, oldPrice, newPrice, buttonText, color }) {
    return (
        <div className={styles.main}>
            <h3>{name}</h3>
            <div>
                <caption className={styles.strike}>${oldPrice}</caption>
                <caption>${newPrice}/month</caption>
                <Button sx={{ backgroundColor: color }} variant='outlined' >{buttonText}</Button>

            </div>
            <div>
                <hr></hr>
                <p>what you will get</p>
                <div className={styles.bottom}>
                    <DashboardIcon></DashboardIcon>
                    <caption>Up to 25 Users</caption>

                </div>
                <div className={styles.bottom}>
                    <DashboardIcon></DashboardIcon>
                    <caption>Up to 250 gb</caption>

                </div>
                <div className={styles.bottom}>
                    <DashboardIcon></DashboardIcon>
                    <caption>Email support</caption>

                </div>
                <center> <h3>Explore Features</h3></center>
            </div>

        </div>
    )
}

export default Card