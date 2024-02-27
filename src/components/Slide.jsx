import React from 'react'
import { Carousel } from 'react-bootstrap'

function Slide({slideData}) {
    return (
        < >
            <div>
                <Carousel interval={800}>
                    {slideData.map((item) => (
                        <Carousel.Item>
                            <img style={{width:'100%'}} src={item.image} alt="" />

                        </Carousel.Item>
                    ))
                    }
                </Carousel>
            </div>
        </>
    )
}

export default Slide