import React, { Component } from 'react'

import Img from './Img'

export class Para_2 extends Component {
    render() {
        return (

             <div className='sm-12 md-6 first pt-5'>
               <h3 id='C2'>HOW TO PICK A RANDOM NAME/WINNER? </h3>
               <h5 >Pick a random winner from a list of names with our
                    random name selector in the following simple steps.</h5>

               <Img />
               <p className='steps'>1. Enter your list of names in the textarea separated by comma(,)</p>
               <p className='steps'>2. After entering the name list press the "Enter" button</p>
               <p className='steps'>3. Check the list.</p>
               <p className='steps'>4. Pick a random name via the "Start" button!</p>
               <p className='steps'>5. Choose option to remove name from list of names after name draw which is useful when picking multiple names (Optional)</p>
               <p className='steps pb-5'>6. Pick multiple names/winners with the "Pick another name" button that will be showed on winner page.</p>
             </div>
        );
    }
}

export default Para_2
