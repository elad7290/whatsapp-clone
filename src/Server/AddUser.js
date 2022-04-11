import Users from "./Users";
function AddUser(newUser) {
    const user = {
        username: newUser.username,
        nickname: newUser.nickname,
        password: newUser.password,
        image: newUser.image
    };
    Users.push(user);
}
export default AddUser;