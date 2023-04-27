import { useState } from "react";
import "./App.css";
import Avatar from "react-avatar-edit";
function App() {
  const [image, setImage] = useState("");
  const onCrop = (view) => {
    setImage(view);
    console.log(view);
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
        label={"Select an Image"}
        exportAsSquare={true}
        onClose={onClose}
        exportSize={800}
        onBeforeFileLoad={onBeforeFileLoad}
      />
      {image && <img width={500} src={image} alt="dd" />}
    </div>
  );
}

export default App;
