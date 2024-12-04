import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import styles from '../src/App.module.css'
import { Post } from "./components/post/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lianderDev.png',
      name: 'Liander Vinicius',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera' },
      { type: 'paragraph', content: 'Acabei de Inicar mais curso de programação, agora pela melhor plataforma de cursos desenvolvimento, a Rockseat.' },
      { type: 'link', content: 'Portfólio/LianderDev' },
    ],
    publishedAt: new Date('2024-11-28 10:10:00')
  }
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map((post) => {
            return <Post key={post.id} {...post} />
          })}
        </main>
      </div>
    </>
  )
}