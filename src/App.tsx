import { useState } from "react";
import "./App.css";
import { Closeable } from "./features/Closeable";
import { Modal } from "./components/modal/Modal";

function App() {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <>
      {showDialog && (
        <Modal>
          <Closeable onClose={() => setShowDialog(false)} />
        </Modal>
      )}
      <p>Any Content</p>
      <div>
        <button>Click Me, But I don't do anything</button>
      </div>
      <div>
        <button onClick={() => setShowDialog(true)}>Open a dialog</button>
      </div>
    </>
  );
}

export default App;
