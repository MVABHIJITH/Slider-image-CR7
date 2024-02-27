import React from 'react'
import { Card } from 'react-bootstrap'
function Imgcard({ data }) {
    return (
        < >
            <div className='d-flex m-5'>
                {data.map((item) => (
                    <Card style={{ margin: '5px ', width: '350px' }} className=' border border-0'>
                        <Card.Img variant="top" src={item.image} />
                    </Card>
                ))
                }
            </div >
        </>
    )
}

export default Imgcard