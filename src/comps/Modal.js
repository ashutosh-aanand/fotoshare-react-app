import { motion } from 'framer-motion';

const Modal = ({ selImgUrl, setSelImgUrl }) => {

    // to unmount Modal when the backdrop is clicked (not the image)
    const handleClick = (e) => {
        // console.log(e.target);
        
        // to differentiate image and backdrop
        if(e.target.classList.contains('backdrop')){
            setSelImgUrl(null);
            // when selImgUrl is null, Modal won't be displayed (see in App component)
        }
    }

    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <motion.img src={selImgUrl} alt="selected img"
                initial={{y: "-100vh"}}
                animate={{y: 0 }}
            />
        </motion.div>
    );
}
 
export default Modal;