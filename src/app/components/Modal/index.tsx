import * as Input from "../../components/input";
import "./styles.css";

interface ModalProps {
  isOpen: boolean;
  //   onClose: () => void;
  title: string;
  children?: React.ReactNode;
}

export function Modal({ isOpen, title, children }: ModalProps) {
  return (
    <div className="modal">
      <div className="overlay">
        <div>
          <header className="header">
            <h2>{title}</h2>
          </header>

          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
}
