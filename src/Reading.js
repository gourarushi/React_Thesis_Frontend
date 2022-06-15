import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import Readings from './Readings.json';


function Reading() {
    const navigate = useNavigate();

    const rand_read = Readings[Math.floor(Math.random() * Readings.length)];
    
    // const rand_read = Readings.sort((a) => 0.5 - Math.random());
    
    
    return (
      <div>
        <h1>Please Read the Passage</h1>
        
             <h2>  { rand_read.title } </h2><br />
             <p dangerouslySetInnerHTML={{__html: rand_read.content}} />

        <Button className="code" size="large" variant="contained" onClick={() => {
            navigate("/survey1");
        }}
        > Next 
        </Button>
      </div>
    );
  }
  
  export default Reading;
  