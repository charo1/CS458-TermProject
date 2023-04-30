export async function startTimer(duration, setTimer) {
    var timer = duration, minutes, seconds;
    while (timer >= 0) {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      setTimer(minutes + ":" + seconds);
  
      await new Promise(resolve => setTimeout(resolve, 1000));
      timer--;
    }
  }