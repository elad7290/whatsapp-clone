import Users from './Users'

function GetUser(pwd, username) {
    for (let i = 0; i < Users.length; i++) {
        if (Users[i].username === username && Users[i].password === pwd) {
            return Users[i];
        }
    }
    return null;
}

export default GetUser;