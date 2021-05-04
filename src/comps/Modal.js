const Modal = ({ selImgUrl, setSelImgUrl }) => {

    // to unmount Modal when the backdrop is clicked
    const handleClick = (e) => {
        // console.log(e.target);
        if(e.target.classList.contains('backdrop')){
            setSelImgUrl(null);
            // when selImgUrl is null, Modal won't be displayed (see in App component)
        }
    }

    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selImgUrl} alt="selected img"/>
        </div>
    );
}
 
export default Modal;