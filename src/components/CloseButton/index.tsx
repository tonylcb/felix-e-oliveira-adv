import styles from "./close-button.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function CloseButton() {
  return (
    <IconContext.Provider
      value={{
        size: "28px",
        className: `${styles.closeBttn}`,
      }}
    >
      <AiFillCloseCircle />
    </IconContext.Provider>
  );
}
