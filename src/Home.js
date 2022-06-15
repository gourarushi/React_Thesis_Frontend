import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';


function Home() {
    const navigate = useNavigate();
    return (
      <div className="code">
        <h1>Please start the Experiment</h1>
        <Button size="large" variant="contained" onClick={() => {
            navigate("/reading");
        }}
        > Next 
        </Button>
      </div>
    );
  }
  
  export default Home;
  