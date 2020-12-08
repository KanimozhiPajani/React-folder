import React from 'react'
import './Style.css'


function Topic ({topic_list,key}){
    return(
        <div>
            {
            <ul>
                {
            topic_list.skills.map(sub => 
            <li className='text-uppercase d-inline-flex p-2 bd-highlight rounded skill'>{sub.topic}</li>)
            }
            </ul>
}
        </div>
    )
}

export default Topic
