import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import styles from '../src/App.module.css'
import { Post } from "./components/post/Post";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}