import Users from "./Users";
import Default_img from "./Images/Default_img.jpeg"

function GetImageById(id) {
    for (let i=0; i<Users.length; i++){
        if (Users[i].username === id){
            return Users[i].image;
        }
    }
    return Default_img;
}
export default GetImageById;