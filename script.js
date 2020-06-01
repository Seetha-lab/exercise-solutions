const fs = require('fs');
fs.readFile('./floor.txt', (err, data) => {
     if (err) {
        console.log(err);
    }
    console.time("funchallenge");
    gottofloor(data);
    console.timeEnd("funchallenge");
})

 function gottofloor(data) {

    let ground = 0;
    const floordetails= data.toString();
    console.log(floordetails)
   for (let i=0; i<floordetails.length;i++){
    if(ground === -1)
    {
      console.log(i-1);
      break; 
    }
    (floordetails[i] === "(") ? ground++ : ground--
       }
    console.log(ground);
  }
  
  



  /*function gottofloor(data) {

    const floordetails= data.toString();
    const floorArray = floordetails.split('');
   const ground = floorArray.reduce( (acc, val) => {
    (val === "(") ? acc++ : acc--

return acc;

   }
   ,0)
   console.log(ground);
  }*/


