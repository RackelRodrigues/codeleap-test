"use client";

import { Cards } from "@/app/components/Cards";
import * as Input from "../components/input";
import { Modal } from "@/app/components/Modal";
import { useRouter } from "next/navigation";
import "./styles.css";
import Button from "../components/button";
import { useContext, useState } from "react";
import { PostDTO } from "../DTO/postsDTO";
import { initialPosts } from "../data/posts";
import { GlobalContext } from "../contexts/GlobalContext";
import { IoIosLogOut } from "react-icons/io";
import Select from "../components/select";
import { selectOptions } from "../data/filterList";

export default function Main() {
  const router = useRouter();

  const { name, setName } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [titleEdit, setTitleEdit] = useState("");
  const [contentEdit, setContentEdit] = useState("");
  const [Edit, setEdit] = useState(false);
  const [Delete, setDelete] = useState(false);
  const [editPostId, setEditPostId] = useState<number | null>(null);
  const [deletePostId, setDeletePostId] = useState<number | null>(null);
  const [posts, setPosts] = useState<PostDTO[]>(initialPosts);
  const [filter, setFilter] = useState("");

  function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      title,
      name: name,
      time: "now",
      content,
      authorId: 4,
      likes: 0,
    };

    setPosts((prev) => [...prev, newPost]);

    setTitle("");
    setContent("");
  }

  function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!editPostId) return;

    setPosts((prev) =>
      prev.map((post) =>
        post.id === editPostId
          ? { ...post, title: titleEdit, content: contentEdit }
          : post,
      ),
    );

    setEdit(false);
    setEditPostId(null);
  }

  function handleEdit(id: number) {
    const post = posts.find((p) => p.id === id);

    if (!post) return;

    setTitleEdit(post.title);
    setContentEdit(post.content);
    setEditPostId(id);
    setEdit(true);
  }

  function handleDelete(id: number) {
    setDeletePostId(id);
    setDelete(true);
  }

  function confirmDelete() {
    if (!deletePostId) return;

    setPosts((prev) => prev.filter((post) => post.id !== deletePostId));

    setDelete(false);
    setDeletePostId(null);
  }

  function handleLogout() {
    router.push("/");
    setName("");
  }

  const filteredPosts = posts.filter((post) => {
    if (filter === "recent") {
      const postTime = new Date(post.time).getTime();
      const now = Date.now();
      const thirtyMinutes = 30 * 60 * 1000;
      return now - postTime <= thirtyMinutes;
    }
    return true;
  });
  return (
    <div className="container">
      <div className="header">
        <h2 className="header-title">CodeLeap Network</h2>

        <span className="btn-logout" onClick={handleLogout}>
          <IoIosLogOut size={30} color="#fff" />
        </span>
      </div>
      <div className="container-post">
        <div className="post-content">
          <div>
            <h2>What’s on your mind?</h2>

            <Select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              options={selectOptions}
              placeholder="Sort by "
            />
          </div>

          <form onSubmit={handleCreate}>
            <div>
              <label>Title</label>
              <Input.Root>
                <Input.Field
                  placeholder="Content here"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Input.Root>
            </div>

            <div>
              <label>Content</label>
              <div className="textarea">
                <Input.Root>
                  <Input.Field
                    placeholder="Content here"
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </Input.Root>
              </div>
            </div>

            <div className="button-content">
              <Button
                className="primary"
                disabled={!title.trim() || !content.trim()}
                type="submit"
              >
                Create
              </Button>
            </div>
          </form>
        </div>
        <div className="post-feed">
          {filter ? (
            filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <Cards
                  key={index}
                  title={post.title}
                  name={post.name}
                  time={post.time}
                  content={post.content}
                  authorId={post.authorId}
                  likes={post.likes}
                  onDelete={() => handleDelete(post.id)}
                  onEdit={() => handleEdit(post.id)}
                />
              ))
            ) : (
              <p className="noPost">No posts found.</p>
            )
          ) : (
            posts.map((post, index) => (
              <Cards
                key={index}
                title={post.title}
                name={post.name}
                time={post.time}
                content={post.content}
                authorId={post.authorId}
                likes={post.likes}
                onDelete={() => handleDelete(post.id)}
                onEdit={() => handleEdit(post.id)}
              />
            ))
          )}
        </div>

        {Delete && (
          <Modal
            isOpen={true}
            title="Are you sure you want to delete this item?"
          >
            <div className="button-content">
              <Button onClick={() => setDelete(false)}>Cancel</Button>

              <Button className="delete" onClick={confirmDelete}>
                Delete
              </Button>
            </div>
          </Modal>
        )}

        {Edit && (
          <Modal isOpen={true} title="Edit item">
            <form onSubmit={handleUpdate}>
              <div>
                <label>Title</label>
                <Input.Root>
                  <Input.Field
                    placeholder="Content here"
                    type="text"
                    value={titleEdit}
                    onChange={(e) => setTitleEdit(e.target.value)}
                  />
                </Input.Root>
              </div>

              <div>
                <label>Content</label>
                <textarea
                  className="textarea"
                  placeholder="Content here"
                  value={contentEdit}
                  onChange={(e) => setContentEdit(e.target.value)}
                />
              </div>

              <div className="button-content">
                <Button onClick={() => setEdit(false)}>Cancel</Button>

                <Button className="secondary" type="submit">
                  Save
                </Button>
              </div>
            </form>
          </Modal>
        )}
      </div>
    </div>
  );
}
