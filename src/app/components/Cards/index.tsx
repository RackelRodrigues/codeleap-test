import "./styles.css";
import { IoTrashBinSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";

interface CardsProps {
  title: string;
  name: string;
  content: string;
  time: string;
}

export function Cards({ title, name, content, time }: CardsProps) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="cards-content">
      <div className="header-card">
        <h2>{title}</h2>

        <div className="container-buttons">
          <span className="btn" onClick={() => setLiked(!liked)}>
            {liked ? (
              <FaHeart size={20} color="red" />
            ) : (
              <FaRegHeart size={20} color="#fff" />
            )}
          </span>
          <span className="btn">
            <IoTrashBinSharp size={20} color="#fff" />
          </span>
          <span className="btn">
            <FaRegEdit size={20} color="#fff" />
          </span>
        </div>
      </div>

      <div>
        <span className="name-post">@{name}</span>

        <span className="time">{time}</span>
      </div>

      <p>{content}</p>
    </div>
  );
}
