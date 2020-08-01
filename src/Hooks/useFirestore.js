// First create collection snapShot object to retrieve items from database.
//  then create an empty array to store images
//  set an state to that image and return data
// also run an unsubscribe function to closed the collection when react-dom will unmount.

import { useState, useEffect } from "react";
import { projectFirestore } from "../Firebase/config";

const useFirestore = collection=>{
    const [docs, setDocs] = useState([]);
    useEffect(()=>{
        const unSubscribe = projectFirestore.collection(collection)
        .orderBy('createdAt',"desc")
        .onSnapshot(snap=>{
            let documents = [];
            snap.forEach(doc=>{
               documents.push({...doc.data(), id: doc.id})
            })
            setDocs(documents);
        })
        return()=> unSubscribe();
    },[collection])
    return {docs}
}

export default useFirestore;