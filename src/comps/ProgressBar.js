import { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

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
        <div className="progress-bar" style={{width: `${progress}%` }}></div>
    );
}
 
export default ProgressBar;