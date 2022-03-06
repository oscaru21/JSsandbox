//fetch API

// fetch('http://35.184.94.64:8080/users/1', {
//     method: 'GET', 
// }).then(response => {
//     console.log('resolved', response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log('rejected', err);
// });



//asyn & await
//asynchronous functions will always return a Promise
const getUsers = async () => {
    //the await keyword replace the use of then and catch mehtods
    const response = await fetch('http://35.184.94.64:8080/users');
    if(response.status !== 200){
        throw new Error('Cannot fetch data');
    }
    //we can use the await keyword with evrything that returns a Promise
    const data = await response.json();
    return data;
};

getUsers()
    .then(data => console.log(data))
    .catch(error => console.log(error));
