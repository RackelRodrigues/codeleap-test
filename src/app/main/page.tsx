"use client";

import { Cards } from "@/app/components/Cards";
import * as Input from "../components/input";
import { Modal } from "@/app/components/Modal";
import { useRouter } from "next/navigation";
import "./styles.css";
import Button from "../components/button";
import { useState } from "react";

export default function Main() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  function handleEnter() {}
  return (
    <div className="container">
      <div className="header">
        <h1>CodeLeap Network</h1>
      </div>
      <div className="container-post">
        <div className="post-content">
          <h2>What’s on your mind?</h2>
          <div>
            <label htmlFor="">Title</label>
            <Input.Root>
              <Input.Field placeholder="Content here" type="text" />
            </Input.Root>
          </div>

          <div>
            <label htmlFor="">Content</label>
            <textarea className="textarea" placeholder="Content here" />
          </div>

          <div className="button-content">
            <Button
              className="primary"
              disabled={!title.trim() && !Content.trim()}
            >
              Create
            </Button>
          </div>
        </div>

        <Cards
          title="My First Post at CodeLeap Network!"
          name="Victor"
          time="24 minutos"
          content="Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat."
        />

        <Cards
          title="My Second Post at CodeLeap Network!"
          name="Vini"
          time="45 minutos "
          content="Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat."
        />

        <Modal isOpen={true} title="Are you sure you want to delete this item?">
          <div className="button-content">
            <Button>Cancel</Button>

            <Button className="secondary">Delete</Button>
          </div>
        </Modal>

        <Modal isOpen={true} title="Edit item">
          <div>
            <label htmlFor="">Title</label>
            <Input.Root>
              <Input.Field placeholder="Content here" type="text" />
            </Input.Root>
          </div>

          <div>
            <label htmlFor="">Content</label>
            <textarea className="textarea" placeholder="Content here" />
          </div>

          <div className="button-content">
            <Button>Cancel</Button>

            <Button className="terciary">Delete</Button>
          </div>
        </Modal>
      </div>
    </div>
  );
}
