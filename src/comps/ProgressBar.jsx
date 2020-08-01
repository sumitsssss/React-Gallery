import React, { useEffect } from 'react';
import useStorage from '../Hooks/useStorage';
import {motion } from 'framer-motion';

const ProgressBar = ({file, setFile})=>{
    // Custom Hook
    const {url, progress} = useStorage(file);

    useEffect(()=>{
        // For disappearing progress bar when url is completely loaded.
        if(url){
            setFile(null);
        }
    },[url, setFile])

    console.log(progress, url);
    return(
        <motion.div initial={{width: 0}} animate={{width:`${progress}%`}} className="progress-bar">
        </motion.div>
    )
}
export default ProgressBar;