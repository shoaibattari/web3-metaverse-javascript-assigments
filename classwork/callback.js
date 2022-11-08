
// // get data server
// console.log('one');
// let getDataFromServer = (cb) =>{
// console.log('getting data from server');

// setTimeout(()=>{
//     console.log("data received from server");
// let data = '555';
// cb(data);
// },1000);
// };


// const callback =(data) =>{
//     console.log(data);
// };

// const result =  getDataFromServer(callback);
// // console.log(result);


// const DoneParatha = (msg) =>{
// console.log(msg);
// }

const makeparata = (callback) => {
    setTimeout(() => {
        callback('making paratha');
    }, 2000)
}

const makeLassi = (callback) => {
    setTimeout(() => {
        callback('lassi done')
    }, 2000)
}

makeparata(
    function () {
        console.log('paratha ready to eat');
        console.log('dakaar!!!!');
        console.log('want lassi');
        makeLassi(
            function () {
                console.log('ready lassi for drink');
            }
        )
    }
)