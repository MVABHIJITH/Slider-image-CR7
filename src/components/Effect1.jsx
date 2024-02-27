import React from 'react'
import { Parallax } from 'react-parallax'

function Effect1() {
    return (
        < >
            <Parallax className='paral1' bgImage=' https://images8.alphacoders.com/476/thumb-1920-476725.jpg' strength={200} blur={{ min: -15, max: 15 }}>
            </Parallax>

            <Parallax className='paral1' bgImage=' https://wallpapercosmos.com/w/full/a/8/c/101161-3840x2160-desktop-4k-cristiano-ronaldo-wallpaper-photo.jpg' strength={800}>
            </Parallax>
        </>
    )
}

export default Effect1                                                                                             