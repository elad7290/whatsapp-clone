function Alert(msg,type){
    var alertPlaceholder = document.getElementById('alert')
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div data-bs-delay="1" class="alert alert-' + type + ' alert-dismissible" role="alert">' + msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    alertPlaceholder.append(wrapper)
    return(
        <></>
    );
}
export default Alert;