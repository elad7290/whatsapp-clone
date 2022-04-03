import './LoginInput.css'
function ImageInput({details}){
    return(
        <div className="input-box">
            <label id="img_label">
                <i className="fa fa-camera" />
                {details.placeholder}
                <input type="file" accept="image/*" id={details.id} placeholder={details.placeholder} name={details.name}/>
            </label>
        </div>
    );
}
export default ImageInput;