import useFirestore from "../hooks/useFirestore";
import { motion } from 'framer-motion'

const ImageGrid = ({ setSelImgUrl }) => {

    const { docs } = useFirestore('fotos');
    // console.log(docs);

    return (
        <div className="img-grid">
            { docs && docs.map( doc => (
                <motion.div className="img-wrap" key={doc.id}
                    layout
                    whileHover={{opacity: 1}}
                    onClick={()=> setSelImgUrl(doc.url)}
                >
                    <motion.img src={doc.url} alt="image"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1}}
                    />
                </motion.div>
            )) }
        </div>
    );
}
// key={doc.id} is important for react to track each item and apply animation to it.
 
export default ImageGrid;