import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

// this hook will take a collection name, connect to it in the firestore
// and then will fetch us data once initially and then everytime the data updates in firestore
// It will return the data in decreasing order of timestamp.
const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(()=>{
        const unsub = projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap)=>{
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id});
            });
            setDocs(documents);
        });
        
        // call unsub() to disconnect
        return ()=> unsub();

    }, [collection])

    return {docs};
}
 
export default useFirestore;