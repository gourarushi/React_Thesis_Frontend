import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Slider } from '@mui/material';
import Box from '@mui/material/Box';

const Separator = styled('div')(
    ({ theme }) => `
    height: ${theme.spacing(3)};
  `,
  );
  
  const marks = [
    {
      value: 0,
      label: 'Sad',
    },
    {
      value: 10,
      
    },
    {
      value: 20,
      
    },
    {
      value: 30,
      
    },
    {
        value: 40,
        
      },
    {
        value: 50,
        label: 'Neutral',
    },
    {
        value: 60,
        
    },
    {
        value: 70,
        
    },
    {
        value: 80,
    },
    {
        value: 90,
        
    },
    {
        value: 100,
        label: 'Happy',
    },
  ];
  
  function valuetext(value) {
    return `${value}`;
  }


  
// function Survey2() {
//     const navigate = useNavigate();
//     return (
      
        
      
//     );
//   }
  
//   export default Survey2;
  

export default function DiscreteSliderLabel() {
    const navigate = useNavigate();

    return (
        <>
            <div className="code">
                <h1>Reading Survey page</h1>

                <Box sx={{ width: 300 }}>
                <Slider
                 aria-label="Always visible"
                 defaultValue={50}
                 getAriaValueText={valuetext}
                 step={10}
                 marks={marks}
                 valueLabelDisplay="on"
                />
                </Box>

                <Box
                component="span"
                m={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                >
                <Button size="large" variant="contained" sx={{ height: 40 }}> Submit </Button>
                <Button size="large" variant="contained" sx={{ height: 40 }} onClick={() => {
                navigate("/video");
                }}
                > Next 
                </Button>
                </Box>
            </div>
        </>
    );
  }