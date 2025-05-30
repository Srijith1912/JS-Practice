function studyCode(){
  return new Promise ((resolve, reject) => {
    setTimeout(() => {

      let val = Math.random() >= 0.50;

      if(val){
        let msg = "Code has been studied."
        console.log(msg);
        resolve(msg);
      }
      else{
        let msg = "Code hasn't been studied."
        console.log(msg);
        reject(new Error("Code hasn't been studied."));
      }


    }, 2500);
  });
}

function cookFood(){
  return new Promise ((resolve, reject) => {
    setTimeout(() => {

      let val = Math.random() >= 0.50;

      if(val){
        let msg = "Food has been cooked."
        console.log(msg);
        resolve(msg);
      }
      else{
        let msg = "Food hasn't been cooked."
        console.log(msg);
        reject(new Error(msg));
      }


    }, 2500);
  });
}

function doGym(){
  return new Promise ((resolve, reject) => {
    setTimeout(() => {

      let val = Math.random() >= 0.50;

      if(val){
        let msg = "Worked out in gym."
        console.log(msg);
        resolve(msg);
      }
      else{
        let msg = "Didn't work out in gym"
        console.log(msg);
        reject(new Error(msg));
      }


    }, 2500);
  });
}

studyCode().then (value => {console.log(value); return cookFood()})
           .then (value => {console.log(value); return doGym()})
           .then (value => {console.log(value); console.log("All tasks done.")})
           .catch(error => {console.log("Error: " + error.message)})


/*
async function async1(){

  try{
    let res1 = await studyCode();
    let res2 = await cookFood();
    let res3 = await doGym();
    console.log("Tasks done: " + res1 + " "+ res2 + " " + res3);
  }
  catch(error) {
    console.error(error.message);
  }

}

async1();
*/