
function ImageMessage(props){

    const sendImage = () => {
    }

    return (
        <div>
            <label htmlFor="image_footer">
                <i className="fa fa-image icon_footer"/>
            </label>
            <input id="image_footer" type="file" accept="image/*" onChange={sendImage}/>
        </div>

    );

}

export default ImageMessage;