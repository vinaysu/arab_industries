import React from 'react'
import styles from './Navbar.module.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Navbar() {
    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <img width='80' src='https://media.licdn.com/dms/image/C4D0BAQHn-mst7Jf8Pw/company-logo_200_200/0/1638195127235?e=2147483647&v=beta&t=PDDQjWKWpGJwb8n_r4PG7kBXblPtJYzC-Dtyy_oA0B8' />

            </div>
            <div className={styles.right}>
                <div >
                    <h3 className={styles.companyName} >company name</h3>
                </div>
                <ExpandMoreIcon  className={styles.icon} ></ExpandMoreIcon>
            </div>
        </div>
    )
}

export default Navbar