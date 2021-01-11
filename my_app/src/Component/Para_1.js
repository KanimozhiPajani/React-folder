import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export class Para_1 extends Component {
    render() {
        return (
            <div className='second'>
            <h4 id="C3" className='p-2'>WHAT IS RANDOM NAME PICKER?</h4>

              <Row className='row'>
                  
                <Col  md='6' sm='12'className='col_1 p-5'>
                  <h4 id='C1'> NAME PICKER</h4>
                  <h6 className=' p-3 para_1' > 
                  Name Picker can be used to quickly pick a random name or winner from a list of names for any draw, raffle or contest.
                  Enter your list of names in the textarea and quickly draw names and pick a random winner. With our Random Picker it is possible to remove a winner from the list of names after a draw.
                  Enjoy random name picker app!</h6>
                </Col>

                <Col  md='6' sm='12' className='col_2 p-5' > 
                  <h4 id='C4'>RANDOM NAME PICKER REMOVES NAMES</h4>
                  <h6 className=' p-3 para_1'> Are you looking for a name picker that removes names?
                   We have an option to that the name picker will remove a name from the list of names after a draw. 
                   You can select the option "Remove name from list of names after draw".
                   After a winner is chosen and you want to choose another name the previous winner will be removed.</h6>
                </Col>  
               </Row>
            </div>
        )
    }
}

export default Para_1
