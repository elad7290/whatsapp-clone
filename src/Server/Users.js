import img1 from "./Images/user1.jpg"
import img2 from "./Images/user2.jpg"
import img3 from "./Images/user3.jpg"

const Users = [
    {username:"Tigger", nickname:"TY-TY", password:"blabka10@", image: img1},
    {username:"Panda", nickname:"Doobi", password:"Dubigal12!", image: img2},
    {username:"Lion", nickname:"Lio", password:"Roar99$", image: img3}
];


/*NOT WORKING!*/
function GetUser({pwd, username}){
    Users.forEach((user) => {
        if(user.username.value === username && user.password.value === pwd){
            return user;
        }
    });
    return null;
}

export default GetUser;