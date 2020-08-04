import NavBar from './NavBar';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React,{useState} from 'react';
import {experienceInfo as info} from './experienceInfo';
import Card from './Card'

export default function Experience(){
    const [state,setCheckbox]= useState({
        all: true,
        volunteer: false,
        professional: false
    });

    const filtered = (i) =>{
        if(state.all){
            return true;
        }else if(state.volunteer && i === "professional"){
            return true;
        }else if(state.professional && i === "volunteer"){
            return true;
        }else{
            return false;
        }
    }
    const handleChange = (e) => {
        setCheckbox({...state,[e.target.name]:e.target.checked});
    }

    return(
        <>
        <FormGroup row>
            <FormControlLabel
                control={<Checkbox checked={state.all} onChange={handleChange} name="all"/>}
                label = "All"
            />
            <FormControlLabel
                control={<Checkbox checked={state.volunteer} onChange={handleChange} name="volunteer"/>}
                label = "Volunteer"
            /> 
            <FormControlLabel
                control={<Checkbox checked={state.professional} onChange={handleChange} name="professional"/>}
                label = "Professional"
            />                 
        </FormGroup>
            <h2>Experience</h2>
            {info.filter(item => filtered(item.card.type)).map((item)=>{
                    return <Card 
                    url={item.card.url}
                    company={item.card.company}
                    title={item.card.position}
                    date={item.card.duration}
                    description={item.card.description}
                    />
            })}
        </>
    );

}