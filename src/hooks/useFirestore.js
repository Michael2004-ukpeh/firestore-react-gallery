import { useState, useEffect } from 'react'
import { db } from '../firebase/config'
import {collection,orderBy,onSnapshot,query } from 'firebase/firestore'
const useFirestore = (collec) =>{
   const [docs, setDocs] =useState([])
   useEffect(() =>{
    const collectionRef = collection(db,collec)
    const queryRef = query(collectionRef, orderBy('createdAt', 'desc'))
    const unsub = onSnapshot(queryRef, (snapShot) =>{
        let docs = []
        snapShot.forEach((doc) =>{
        docs.push({...doc.data(), id:doc.id})
        })
        console.log(docs)
        setDocs(docs)
    })
    return () =>{
        unsub()
    }
   },[collec])
   return{docs}
}

export default useFirestore