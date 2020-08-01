import React, { useState } from 'react';
import Title from './comps/Title';
import FileUpload from './comps/UploadFile';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title/>
      <FileUpload/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg &&  <Modal setSelectedImg={setSelectedImg} selectedImg={selectedImg}/>}
    </div>
  );
}

export default App;

