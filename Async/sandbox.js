//HTTP Request

//In order to make code more reusable is adviced to wrap all this steps in a function
const getUserById = (id) => {
    return new Promise((resolve,reject) => {
        //1) Create a request object
        const request = new XMLHttpRequest();

        //response handling listener
        request.addEventListener('readystatechange', () => {
            //readyState 4 means that the request is DONE
            if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            resolve(data);
            }else if(request.readyState === 4){
            reject('could not fetch the data');
            }
        });

        //2) Define the request method and endpoint using open() method
        request.open('GET', `http://35.184.94.64:8080/users/${id}`);

        //3) Send the request
        request.send();
    });
};

//call the function
// getUserById(24, (err, data) => {
//     if(!err){
//         console.log(data);
//     }else{
//         console.log(err);
//     }
// });

//promises example
const getSomething = () => {

    //a promise is a result that will take time to do.
    //it can be resolved or rejected
    return new Promise((resolve, reject) => {
        //fetch something
        //resolve('some data');
        reject('some error');
    });
};

//if the Promise gets resolved it will execute the first callback function that receives the data sent
//if the Promise gets rejected it will execute the second callback function
getSomething().then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
});

//Promise real use
// getUserById(62).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

//Chaining promises
getUserById(62).then(data => {
    console.log(data);
    return getUserById(63);
}).then(data => {
    console.log(data);
    return getUserById(64);
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})