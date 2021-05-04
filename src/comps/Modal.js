const Modal = ({ selImgUrl }) => {
    return (
        <div className="backdrop">
            <img src={selImgUrl} alt="selected img"/>
        </div>
    );
}
 
export default Modal;