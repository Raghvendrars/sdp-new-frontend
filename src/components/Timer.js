import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

function Timer(props) {

  let entryTime = props.entryTime;
  let exitTime = props.exitTime;
  const [time, setTime] = useState(0);

  useEffect(() => {
    const time = exitTime - entryTime;
    const differenceInMinutes = time;
    msToTime(differenceInMinutes);
  }, []);

  function msToTime(duration) {

    let milliseconds = Math.floor((duration % 1000) / 100);
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    setTime(hours + ":" + minutes + ":" + seconds);
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }


  return <Typography> {time}</Typography>;
}

export default Timer;
