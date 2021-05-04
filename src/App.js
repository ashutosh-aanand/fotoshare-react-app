import { useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Title from "./comps/Title";
import Upload from "./comps/Upload";

function App() {
  const [selImgUrl, setSelImgUrl] = useState(null);

  return (
    <div className="app">
      <Title />
      <Upload />
      <ImageGrid setSelImgUrl={setSelImgUrl} />
      { selImgUrl && <Modal selImgUrl={selImgUrl} setSelImgUrl={setSelImgUrl} /> }
    </div>
  );
}

export default App;
