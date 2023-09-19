import React from 'react'
import HeroSlider, { Slide } from 'hero-slider'

function BasicSlider() {


    const images = [
        'https://t4.ftcdn.net/jpg/01/43/23/83/360_F_143238306_lh0ap42wgot36y44WybfQpvsJB5A1CHc.jpg',
        'https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg',
        'https://thumbs.dreamstime.com/b/demo-text-businessman-dark-vintage-background-108609906.jpg',
        'https://media.istockphoto.com/id/615422436/photo/demo-sign-cubes.jpg?s=612x612&w=0&k=20&c=HHOLIiF8SmbIssxKv3G480EgTVub_v9cc1QME3Dn6XU='


    ]


    return (
        <HeroSlider
            slidingAnimation='left_to_right'
            orientation='horizontal'
            initialSlide={1}
            onBeforeChange={(previousSlide, nextSlide) => console.log('onBeforeChange', previousSlide, nextSlide)}
            onChange={nextSlide => console.log('onchange', nextSlide)}
            onAfterChange={nextSlide => console.log('onAfterChange', nextSlide)}
            style={{
                backgroundClor: 'rgba(0,0,0,0.33)'

            }}
            settings={{
                slidingDuration: 250,
                slidingDelay: 100,
                shouldAutoPlay: true,
                shouldDisplayButons: true,
                autoPlayDuration: 5000,
                height: '100vh'

            }}

        >
            {
                images.map((ele) => <Slide
                    background={{
                        backgroundImageSrc: ele,
                        backgroundAttachment: 'fixed'
                    }}


                />)
            }






        </HeroSlider>
    )
}

export default BasicSlider