//Classes

class User {
    constructor(username, email){
        //set up properties in the object
        this.username = username;
        this.email = email;
    }

    //methods and method chaining
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }

    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }
}

const userOne = new User('Oscar', 'oscarumana@mail.com');
console.log(userOne);
userOne.login().logout();