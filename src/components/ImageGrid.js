import  React from 'react';
import useFirestore from '../hooks/useFirestore'
import {motion} from 'framer-motion'
const  ImageGrid = ({setSelectedImg})=>{
    const {docs} = useFirestore('images')

    return(
        <div className='img-grid'>
            {docs && docs.map(doc =>{
                return (
                    <motion.div className="img-wrap"
                    whileHover={{
                        opacity:1
                    }} 
                    layout

                    onClick={() => setSelectedImg(doc.url)}
                    key = {doc.id}>
                        <motion.img src={doc.url}
                        initial ={{opacity:0}}
                        animate={{opacity:1}}
                        transition = {{delay:1}}
                         alt="uploaded pic" />

                    </motion.div>
                )
            })}
        </div>
    )
}

export default ImageGrid