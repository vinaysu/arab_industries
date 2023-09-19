import React from 'react'
import styles from './Sidebar.module.css'
import SidebarCard from '../sidebarCard/SidebarCard'
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import BackHandIcon from '@mui/icons-material/BackHand';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { Button } from '@mui/material';

function Sidebar() {

    const data = [
        {
            icon: <DashboardIcon></DashboardIcon>,
            name: 'Dashboard'

        },
        {
            icon: <AccessibilityIcon></AccessibilityIcon>,
            name: 'Perks'

        },
        {
            icon: <AssignmentIndIcon></AssignmentIndIcon>,
            name: 'Addons'

        },
        {
            icon: <MessageIcon></MessageIcon>,
            name: 'FAQ'

        },
        {
            icon: <BackHandIcon></BackHandIcon>,
            name: 'Support'

        },
    ]



    return (
        <div className={styles.main}>
            <div className={styles.box}>
                <img width='80'  src='https://www.bing.com/th?id=OIP.bbEC4zuJyYZq2FwlY1w1kAHaHa&pid=3.1&cb=&w=300&h=300&p=0'></img>
                <span>Ram Mohan</span>
                <caption>suddakuntivinay7877@gmail.com</caption>
            </div>
            <div className={styles.cards}>
                {
                    data.map((ele) => <SidebarCard icon={ele.icon} name={ele.name}>

                    </SidebarCard>)
                }
            </div>

            <Button sx={{
                position:'relative',
                left:'10rem',
                top:'6rem'
            }} variant='outlined' >Logout</Button>


        </div>
    )
}

export default Sidebar