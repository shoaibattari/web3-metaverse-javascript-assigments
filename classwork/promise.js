

// // promises
// const parathapromise = new Promise((resolveCallBAck, rejectCallBAck) => {
//     const mood = 6;
//     // const mood = 4;

//     setTimeout(() => {
//         if (mood > 5) {
//             resolveCallBAck('Please, eat Paratha')
//         } else {
//             rejectCallBAck('too tired')
//         }
//     }, 1000);
// });


// parathapromise
//     .then((response) => {
//         console.log(response,'responce');
//     })
//     .catch((error) => {
//         console.log(error, 'error');
//     });




function getParathaPromise() {
    const parathapromise = new Promise((resolveCallBAck, rejectCallBAck) => {
        const mood = 6;

        setTimeout(() => {
            if (mood > 5) {
                resolveCallBAck('Please, eat Paratha')
            } else {
                rejectCallBAck('too tired')
            }
        }, 1000);
    });

    return parathapromise;
}
// function main(){
// getParathaPromise()
//     .then((response) => {
//         console.log(response, 'response');
//     })
//     .catch((error) => {
//         console.log(error, 'error');
//     })
// };

// main()


// async function main2(){
// try{
//     const result = await getParathaPromise();
//     console.log(result);}
//     catch (error){
//         console.log(error);
//     }
// }
// main2();


// async function main3(){
// try{
//     const result = await getParathaPromise();
//     console.log(result);}
//     catch (error){
//         console.log(error);
//     } finally{
//         console.log('it will always run')
//     }
// }
// main3();


function getLassiPromise() {
    const lassiPromise = new Promise((resolvecallback, rejectcallback) => {
        const stumckposition = 6;
        setTimeout(() => {2
            if (stumckposition < 9) {
                resolvecallback('Lassi is ready')
            } else {
                rejectcallback('I m full')
            }
        }, 3000)
    });
    return lassiPromise;
}

// async function main4() {
//     try {
//         const Paratha = await getParathaPromise();
//         const Lassi = await getLassiPromise();
//         console.log(Paratha, 'paratha');
//         console.log(Lassi, 'Lassi');
//     } catch (error) {
//         console.log(error, 'error');
//     }
// }

// main4()


function main5() {
    getParathaPromise()
      .then((response) => {
        console.log(response, 'response ');
        return getLassiPromise();
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error, 'error ');
        return 'test';
      });
  }
  main5();