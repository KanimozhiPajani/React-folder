import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import './style.css'

const getSeason =(lat,month)=>{

if (month >2 && month <9){
    return lat >0 ? 'summer':'winter'
}
else{
    return lat >0 ? 'winter':'summer'
}
}

const seasonSel ={
    summer:{
        title:'summer',
        text:'Summer! Live in sunshine.',
        iconName:'sun outline'
    },
    winter:{
        title:'winter',
        text:'Blissful winter! ',
        iconName:'snowflake'
    }
};

const Display = (props) => {

    const season = getSeason(props.lat,
        new Date().getMonth());

        console.log(season);
        
        const {text,iconName,title }= seasonSel[season];
       

    return (
    <div className={`${title}`}>    
        <i className={`icon-right massive ${iconName} icon `} />
        <h2>{text}</h2>
        <i className={`icon-left massive ${iconName} icon`} />
    </div>)
   
}
export default Display