import "./styles.css";
import { IoTrashBinSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { MdSend } from "react-icons/md";
import * as Input from "../../components/input";
import { useState } from "react";

interface CardsProps {
  title: string;
  name: string;
  content: string;
  time: string;
  onDelete?: () => void;
  onEdit?: () => void;
  authorId?: number;
  likes: number;
}

export function Cards({
  title,
  name,
  content,
  time,
  onDelete,
  onEdit,
  authorId,
  likes,
}: CardsProps) {
  const [isLiked, setisLiked] = useState(false);
  const [isComent, setisComent] = useState(false);
  return (
    <div className="cards-content">
      <div className="header-card">
        <h2>{title}</h2>

        <div className="container-buttons">
          <span className="btn" onClick={() => setisLiked(!isLiked)}>
            {isLiked ? (
              <FaHeart size={20} color="red" />
            ) : (
              <FaRegHeart size={20} color="#fff" />
            )}
          </span>
          <span className="btn" onClick={() => setisComent(!isComent)}>
            <IoChatbubbleOutline size={20} color="#fff" />
          </span>

          {authorId === 4 && (
            <span className="btn" onClick={onEdit}>
              <FaRegEdit size={20} color="#fff" />
            </span>
          )}

          {authorId === 4 && (
            <span className="btn" onClick={onDelete}>
              <IoTrashBinSharp size={20} color="#fff" />
            </span>
          )}
        </div>
      </div>

      <div className="info-post">
        <span className="name-post">@{name}</span>
        <span className="time">{time}</span>
      </div>

      <p className="content">{content}</p>

      <span className="btn-likes">
        <FaHeart size={15} color="red" />
        <span className="likes">{Number(likes) + (isLiked ? 1 : 0)}</span>
      </span>

      {isComent && (
        <div className="Comentcontent">
          <Input.Root>
            <IoChatbubbleOutline size={20} color="#000" />
            <Input.Field type="text" />
            <MdSend size={20} color="var(--color-primary)" />
          </Input.Root>
        </div>
      )}
    </div>
  );
}
