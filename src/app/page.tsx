"use client";

import styles from "./page.module.css";
import { Modal } from "./components/Modal";
import * as Input from "./components/input";
import Button from "./components/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  function handleEnter() {
    router.push("/Main");
  }

  return (
    <div className={styles.main}>
      <Modal isOpen={true} title="Welcome to CodeLeap network!">
        <label>Please enter your username</label>
        <Input.Root>
          <Input.Field
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Input.Root>
        <div className="button-content">
          <Button
            className="primary"
            disabled={!name.trim()}
            onClick={handleEnter}
          >
            Enter
          </Button>
        </div>
      </Modal>
    </div>
  );
}
