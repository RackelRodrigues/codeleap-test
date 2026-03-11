"use client";

import styles from "./page.module.css";
import { Modal } from "./components/Modal";
import * as Input from "./components/input";
import Button from "./components/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoPersonSharp } from "react-icons/io5";
import { useContext } from "react";
import { GlobalContext } from "./contexts/GlobalContext";

export default function Home() {
  const { name, setName } = useContext(GlobalContext);
  const router = useRouter();
  const [username, setUsername] = useState("");

  function handleEnter() {
    router.push("/main");
    setName(username);
  }

  return (
    <div className={styles.main}>
      <Modal isOpen={true} title="Welcome to CodeLeap network!">
        <label>Please enter your username</label>
        <Input.Root>
          <IoPersonSharp size={20} color="var(--color-primary)" />
          <Input.Field
            placeholder="John Doe"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Input.Root>
        <div className="button-content">
          <Button
            className="primary"
            disabled={!username.trim()}
            onClick={handleEnter}
          >
            Enter
          </Button>
        </div>
      </Modal>
    </div>
  );
}
