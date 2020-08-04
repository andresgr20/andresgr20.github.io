import Card from './Card';
import React from 'react';

export default function Education(){
    return(
    <>
        <h2>Education</h2>
        <Card 
            company={"University of Waterloo"}
            title={"Bachelor in Computer Science"}
            date={"Sept 2012 - Apr 2020 "}
            description={"Business Option, International Studies Minor,Legal Studies Minor"}
            />
        <h2>Certifations</h2>
    </>
    );
}