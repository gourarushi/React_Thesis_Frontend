import React, {useRef, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


function importAll(r) {
    let videos = {};
    r.keys().map((item) => { videos[item.replace('./', '')] = r(item); });
    return Object.values(videos)  // returns an array
    return videos;  // returns a json object
  }

const videos = {};

videos['Happy'] = importAll(require.context('./Videos/Happy', false, /\.(mp4)$/));
videos['Neutral'] = importAll(require.context('./Videos/Neutral', false, /\.(mp4)$/));
videos['Sad'] = importAll(require.context('./Videos/Sad', false, /\.(mp4)$/));

function Video() {
    const navigate = useNavigate();
    const vidRef = useRef(null);
    const [current_state, set_current_state] = useState('Happy')
    const [current_video, set_current_video] = useState()
    const [counter, setCounter] = useState(5);

    useEffect( () => {
      let rand_vid = videos["Happy"][Math.floor(Math.random()*videos["Happy"].length)];
      set_current_video(rand_vid)
    }, 
    [] )

    useEffect( () => {
      vidRef.current.src = current_video
      if (current_state !== 'Happy') {
        vidRef.current?.play();
      }
      
    }, 
    [current_video] )

    const playVideo = () => {
      vidRef.current.play();
    }
    
    const onEnd = () => {
      setCounter(5)

      if (current_state === 'Happy')
      {
        const rand_vid = videos["Neutral"][Math.floor(Math.random()*videos["Neutral"].length)];
        set_current_video(rand_vid)
        set_current_state('Neutral')
      }
      else if (current_state === 'Neutral')
      {
        const rand_vid = videos["Sad"][Math.floor(Math.random()*videos["Sad"].length)];
        set_current_video(rand_vid)
        set_current_state('Sad')
      }

    }

    useEffect( () => {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);


    return (
      <div className="code">
        <h1>Hello this is Video page</h1>
        <div className="timer" style={{display: counter > 0 ? 'block' : 'none'}}>Countdown: {counter}</div>
          <video style={{display: counter === 0 ? 'block' : 'none'}} width="640" ref={vidRef} controls onEnded={onEnd}>
            <source src={current_video} type="video/mp4" />
          </video>
        

        <Box
            component="span"
            m={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
        >
        <Button size="large" variant="contained" onClick={playVideo}> Play Video </Button>​
        <Button size="large" variant="contained" onClick={() => {
            navigate("/survey2");
        }}
        > Next 
        </Button>
        </Box>
      </div>
    );
  }
  
  export default Video;