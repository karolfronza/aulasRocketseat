// uma função que retorna HTML - Um componente sem tem a extensão JSX
// JSX = JavaScript +XML (HTML)

import { Header } from './components/Header';
import { Post } from './Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
        <Header />

       <div className={styles.wrapper}>
        <Sidebar />
        <main>

            <Post 
               author="Karoline Fronza" 
               content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus accusantium error quasi quas tenetur exercitationem reiciendis recusandae consequuntur temporibus et repellendus veniam aspernatur quia, aperiam quos officia saepe iste quod" 
           />
             <Post 
              author="João"
               content="Novo post!!"
            />

        </main>
       </div>
    </div>
  )
}

