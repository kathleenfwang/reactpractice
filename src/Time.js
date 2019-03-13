import React from 'react'; 

function Time() {
    const date = new Date(); 
    const dateStr = date.toDateString();
    const hours = date.getHours() ; 
    let time = ''; 
    
    // create a style obj 
    const styles = {
        fontSize: 40
    }
     
    if (hours < 12 ) {
        time = 'morning'; 
        styles.color = "violet"

    }
    else if (hours >= 12 && hours < 17 ) {
        time = 'afternoon'
        styles.color = "navy"
    }
    else {
        time = 'night';
        styles.color = "orange"
       
    }
    
    return (
        <h1 style ={styles} >Good {time}! Today is {dateStr}</h1>
    )
}

export default Time; 