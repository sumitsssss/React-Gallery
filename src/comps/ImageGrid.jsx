import React, { useState } from "react";
import useFirestore from "../Hooks/useFirestore";
import { motion } from "framer-motion";
import { Pagination } from "./Pagination";

const ImageGrid = ({ setSelectedImg }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [imagePerPage] = useState(10);
  // Collection name in Firebase firestore 'images'
  const { docs } = useFirestore("images");
  console.log(docs.length);
  const indexOfLastImage = currentPage * imagePerPage;
  const indexOfFirstImage = indexOfLastImage - imagePerPage;
  const currentImage = docs.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <div className="img-grid">
        {currentImage &&
          currentImage.map((item) => (
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
      <div className="pagination">
        <Pagination
          imagePerPage={imagePerPage}
          totalImages={docs.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default ImageGrid;
