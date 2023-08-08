import { ICloseable } from "./ICloseable";

export const Closeable: React.FC<ICloseable> = (props) => {
  return (
    <>
      <p>I am a component that can be closed</p>
      <button>Close</button>
    </>
  );
};
