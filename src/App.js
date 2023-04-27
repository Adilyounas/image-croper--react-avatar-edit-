import { useState } from "react";
import "./App.css";
import Avatar from "react-avatar-edit";
function App() {
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
 
  const array = [image,image2]
console.log(array);


  const onCrop = (view) => {
    setImage(view);
  };

  const onCrop2 = (view) => {
    setImage2(view)
  };

  const onClose = (view) => {
    setImage(null);
  };

  const onBeforeFileLoad = (elem) => {
    console.log(elem.target.files[0]);
  };

  return (
    <div className="container">
      <Avatar
        name="P1"
        width={300}
        height={300}
        onCrop={onCrop}
        exportAsSquare={true}
        onClose={onClose}
        exportSize={300}
        onBeforeFileLoad={onBeforeFileLoad}
      />
      {image && <img width={300} src={image} alt="dd" />}
      <Avatar
        name="P1"
        width={300}
        height={300}
        onCrop={onCrop2}
        exportAsSquare={true}
        onClose={onClose}
        exportSize={300}
        onBeforeFileLoad={onBeforeFileLoad}
      />
      {image2 && <img width={300} src={image2} alt="dd" />}
    </div>
  );
}

export default App;
