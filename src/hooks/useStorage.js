import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore, timestamp } from '../firebase/config';

// this hook will return progress, error, and url 
//  of the file being uploaded.
const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=>{
        // references
        const storageRef = projectStorage.ref(file.name);
        
        // connecting to an existing or creating a new collection named
        //  fotos in firebasestore database.
        const collectionRef = projectFirestore.collection('fotos');

        storageRef.put(file).on('state_changed', (snap)=>{
            let percentage = (snap.bytesTransferred / snap.totalBytes)*100;
            setProgress(percentage);
        }, (err)=>{
            setError(err);
        }, async ()=>{
            const url = await storageRef.getDownloadURL();
            
            // storing image data in database in 'fotos' collection
            //  through its ref
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt });
            
            setUrl(url);
        })
    }, [file]);

    return {progress, url, error};
}

export default useStorage;