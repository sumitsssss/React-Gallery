import React from "react";
import useFirestore from "../Hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  // Collection name in Firebase firestore 'images'
  
  const { docs } = useFirestore("images");
  return (
    <div className="img-grid"  >
      {docs &&
        docs.map((item) => (
          <motion.div
            onClick={() => {
              setSelectedImg(item.url);
            }}
            layout
            className="img-wrap"
            whileHover={{ opacity: 1 }}
            key={item.id}
          >
            <motion.img
              src={item.url}
              alt={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ opacity: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;


