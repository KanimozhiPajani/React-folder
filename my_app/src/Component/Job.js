import React from 'react'
import './Style.css'
import Topic from './topic';
import { Card, Row, Col } from 'react-bootstrap'
import { FaCertificate } from 'react-icons/fa'



function Job ({jobs,key}){
    return(
        <div>{
            jobs.map(list_display => 
                <Card className='primary'>

                    <Row>

                        <Col md='2' sm='2'>
                        <img src={list_display.image} alt="company logo" width='200px' height='120px' className='rounded thumbnail mt-2 mb-2'></img>
                        </Col>
                      
                        <Col className='card'>
                        <h3 className='color'>{list_display.post}</h3>
                        <h5>{list_display.company}  <FaCertificate  className='icon'/></h5>

                        <Topic key={list_display.id} topic_list={list_display} />

                        </Col>
                        
                    </Row>

                </Card>
            )}
        </div>
    )
}
export default Job