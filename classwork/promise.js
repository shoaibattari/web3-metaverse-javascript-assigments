//  function getParathaPromise() {
//     const parathapromise = new Promise((resolveCallBAck, rejectCallBAck) => {
//         const mood = 6;

//         setTimeout(() => {
//             if (mood > 5) {
//                 resolveCallBAck('Please, eat Paratha')
//             } else {
//                 rejectCallBAck('too tired')
//             }
//         }, 1000);
//     });

//     return parathaPromise;
// }
// getParathaPromise()
//     .then((response) => {
//         console.log(response, 'response');
//     })
//     .catch((error) => {
//         console.log(error, 'error');
//     });







    
// promises
const parathapromise = new Promise((resolveCallBAck, rejectCallBAck) => {
    const mood = 6;
    // const mood = 4;

    setTimeout(() => {
        if (mood > 5) {
            resolveCallBAck('Please, eat Paratha')
        } else {
            rejectCallBAck('too tired')
        }
    }, 1000);
});


parathapromise
    .then((response) => {
        console.log(response,'responce');
    })
    .catch((error) => {
        console.log(error, 'error');
    });


// function main(){
// getParathaPromise()
//     .then((response) => {
//         console.log(response,'response');
//     })
//     .catch((error) => {
//         console.log(error, 'error');
//     });
// }
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
