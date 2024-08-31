import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/will-felipe.png",
      name: "Will Felipe",
      role: "Programador",
    },
    content: [
      { type: "paragraph", content: "Fala Galera" },
      { type: "paragraph", content: "Fiz um post!" },
      { type: "link", content: "link-do-post.com" },
    ],
    publishedAt: new Date("2024-06-26 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala Galera" },
      { type: "paragraph", content: "Fiz um post!" },
      { type: "link", content: "link-do-post.com" },
    ],
    publishedAt: new Date("2024-06-26 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
