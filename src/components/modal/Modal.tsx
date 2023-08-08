import ReactDOM from "react-dom";
import { Card } from "../card/Card";
import { IModalProps } from "./IModalProps";
import styles from "./Modal.module.css";

export const Modal: React.FC<IModalProps> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.modalContainer}>
          <div className={styles.modalBackdrop}></div>
          <Card className={styles.modalDialog}>{props.children}</Card>
        </div>,
        document.getElementById("modalContainer")!
      )}
    </>
  );
};
