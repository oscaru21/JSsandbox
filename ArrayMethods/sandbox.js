const scores = [10, 30, 15, 25, 50, 40, 5];
const users = [
    {name: 'Oscar', premium: true},
    {name: 'Walter', premium: false},
    {name: 'Julio', premium: true},
    {name: 'Sebas', premium: false}
];

//filter
let filteredScores = scores.filter(score => score > 20);
console.log('Filtered scores: ', filteredScores);
//Filtered scores:  [ 30, 25, 50, 40 ]

let premiumUsers = users.filter(user => user.premium);
console.log('Premium users: ', premiumUsers);
//Premium users:  [ { name: 'Oscar', premium: true }, { name: 'Julio', premium: true } ]

//map
let updatedScores = scores.map(score => score + 10);
console.log('Updated scores: ', updatedScores);
//Updated scores:  [20, 40, 25, 35, 60, 50, 15]

//reduce
let numberOfScoresBelow15 = scores.reduce((acc,score) => {
    if(score < 15){
        acc++;
    }
    return acc;
}, 0);
console.log('Result: ', numberOfScoresBelow15);
//Result:  2

//find
let firstHighScore = scores.find(score => score > 30);
console.log('First High Score: ', firstHighScore);
//First High Score:  50

//sort
// let sortedScores = scores.sort((a,b) => {
//     if(a > b) return -1
//     else if(a < b) return 1
//     else return 0
// });
//if b is greater returns positive number, if a is greater return negative and if they are equals return 0
let sortedScores = scores.sort((a,b) => b - a); 
console.log(sortedScores);
//[50, 40, 30, 25, 15, 10, 5]