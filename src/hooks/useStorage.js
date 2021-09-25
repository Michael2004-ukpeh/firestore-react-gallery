import {useState, useEffect}  from 'react'
import {projectStorage, db} from '../firebase/config'
import {setDoc, doc,collection, serverTimestamp} from 'firebase/firestore'
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'

const useStorage = (file) =>{
     const [progress, setProgress] = useState(0)
     const [error, setError] = useState(null)
     const [url, setUrl]  = useState(null)

    useEffect(() =>{
       //references 
       const storageRef = ref(projectStorage, file.name)
       const collectionRef = doc(collection(db, 'images'));
       const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on('state_changed', (snapshot) =>{
           let percentage = (snapshot.bytesTransferred /snapshot.totalBytes)*100
        setProgress(percentage)
           switch(snapshot.state){
               case 'paused':
                   console.log('Upload is paused')
                   break;
                case 'running':
                    console.log('Upload is running')
                    break;
                  default :
                  console.log('Upload in progress')
           }
       },(error) =>{
          setError(error)
       },async() =>{
           //Handle successful 
           
         const url= await  getDownloadURL(uploadTask.snapshot.ref)
         const createdAt =serverTimestamp()
         await  setDoc(collectionRef, {url,createdAt})
         setUrl(url)
          

       })
    },[file])
return{
    url,
    progress,
    error
}
}

export default useStorage;