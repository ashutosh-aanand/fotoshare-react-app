import { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({file, setFile}) => {
    const {progress, url} = useStorage(file);
    // console.log(progress, url);

    // to hide the progressbar once the 
    // upload is finished and we get a url
    useEffect(()=>{
        if(url){
            setFile(null);
        }
    },[url, setFile])

    return (
        <motion.div className="progress-bar"
            initial={{width: 0}}
            animate={{width: `${progress}%` }}
        ></motion.div>
    );
}
 
export default ProgressBar;