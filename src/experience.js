import FormControlLabel from '@material-ui/core/FormControlLabel';
import React,{useState} from 'react';
import {experienceInfo as info} from './data/experienceInfo.js';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Card from './Card'
import './Experience.css'

export default function Experience(){
    const [state,setRadio]= useState("all");

    const filtered = (i) =>{
        if(state === 'all'){
            return true;
        }else if(state === 'volunteer' && i === "volunteer"){
            return true;
        }else if(state === 'professional' && i === "professional"){
            return true;
        }else{
            return false;
        }
    }
    const handleChange = (event) => {
        setRadio(event.target.value);
      };

    return(
        <>
        <div className="col">
        <div className="buttons">
                <RadioGroup aria-label="experience-type" name="experience-type" value={state} onChange={handleChange} row>
                    <FormControlLabel value="all" control={<Radio />} label="All" />
                    <FormControlLabel value="professional" control={<Radio />} label="Professional" />
                    <FormControlLabel value="volunteer" control={<Radio />} label="Volunteer" />
                </RadioGroup>               
        </div>
        <div className="experience">
            <h2>Experience</h2>
                {info.filter(item => filtered(item.card.type)).map((item)=>{
                        return <Card 
                        image={item.card.image}
                        company={item.card.company}
                        title={item.card.position}
                        date={item.card.duration}
                        location={item.card.location}
                        description={item.card.description}
                        />
                })}
        </div>
        </div>

        </>
    );

}