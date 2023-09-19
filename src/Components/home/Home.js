import React,{useState} from 'react'
import styles from './Home.module.css'
import Card from '../card/Card'
import Card_bottom from '../cardbottom/Card_bottom'

function Home() {

    const data = [
        {
            name: 'Basic',
            oldPrice: '299.9',
            newPrice: '99.99',
            buttonText: 'Get Started',
            color: 'orange'


        },
        {
            name: 'Standard',
            oldPrice: '29.9',
            newPrice: '9.99',
            buttonText: 'Get Started',
            color: 'red'


        },
        {
            name: 'Premium',
            oldPrice: '599.9',
            newPrice: '199.99',
            buttonText: 'Get Started',
            color: 'violet'


        },
    ]

    const bottomData = [
        {
            text: 'lets Purchase',
            heading: 'Freestarter',
            buttonText: 'hwef',
            description: 'The easiest and the quiekest way to get developed by the following subscriptions',
            buttonText: 'Get Started',
            color: 'green'
        },
        {
            text: 'lets contact',
            heading: 'Enterprice Plan',
            buttonText: 'hwef',
            description: 'The easiest and the quiekest way to get developed by the following subscriptions',
            buttonText: 'Contact Us',
            color: 'blue'
        },
    ]

    const [toggle,setToggle]=useState(true)
    function handleToggle(){
        setToggle(!toggle)
    }

    return (
        <div className={styles.main}>

            <div className={styles.top}>
                <h2>Choose a plan that just fit's for you</h2>
                <div className={styles.toggle}>
                    <span onClick={handleToggle} className={toggle?styles.tog:styles.no}>Montly</span>
                    <span onClick={handleToggle} className={toggle?styles.no:styles.tog}  >Annually</span>
                </div>

            </div>
            <div className={styles.middle}>
                {
                    data.map((ele) => <Card
                        name={ele.name}
                        oldPrice={ele.oldPrice}
                        newPrice={ele.newPrice}
                        buttonText={ele.buttonText}
                        color={ele.color}
                    ></Card>)
                }

            </div>

            <div className={styles.bottom}>
                {
                    bottomData.map((ele) => <Card_bottom text={ele.text}
                        heading={ele.heading}
                        description={ele.description}
                        buttonText={ele.buttonText}
                        color={ele.color}

                    ></Card_bottom>)

                }
            </div>
        </div>

    )
}

export default Home