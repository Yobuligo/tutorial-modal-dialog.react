import { useState } from "react";
import { Modal } from "./components/modal/Modal";
import { SimpleComponent } from "./components/SimpleComponent";

function App() {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div style={{ width: "3000px" }}>
      {showDialog && (
        <Modal onClose={() => setShowDialog(false)}>
          <SimpleComponent />
        </Modal>
      )}
      <p>Any Content</p>
      <button onClick={() => setShowDialog(true)}>Open a dialog</button>
    </div>
  );
}

export default App;
