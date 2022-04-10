import Users from "./Users";

function GetAllUsersName() {
    var allUsers = [];
    for (let i = 0; i < Users.length; i++) {
        allUsers.push(Users[i].username);
    }
    return allUsers;
}

export default GetAllUsersName;