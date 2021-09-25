import React , {useState}from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
function App() {

  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal setSelectedImg={setSelectedImg} selectedImg = {selectedImg}/>}
    </div>
  );
}

export default App;
