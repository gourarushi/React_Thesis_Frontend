import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';


function Resting() {
    const navigate = useNavigate();
    return (
      <div className="code">
        <h1>Hello this is Resting page</h1>
        <Button size="large" variant="contained" onClick={() => {
            navigate("/");
        }}
        > Next 
        </Button>
      </div>
    );
  }
  
  export default Resting;
  