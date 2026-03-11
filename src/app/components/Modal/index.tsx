import "./styles.css";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  title: string;
  children?: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <div className="modal">
      <div className="overlay">
        <div>
          <header className="headerContent">
            <h2 className="modal-Title">{title}</h2>
          </header>

          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
}
