// uma função que retorna HTML - Um componente sem tem a extensão JSX
// JSX = JavaScript +XML (HTML)

import { Post } from './Post';

export function App() {
  return (
    <div>
       <Post 
          author="Karoline Fronza" 
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus accusantium error quasi quas tenetur exercitationem reiciendis recusandae consequuntur temporibus et repellendus veniam aspernatur quia, aperiam quos officia saepe iste quod" 
        />
        <Post 
          author="João"
          content="Novo post!!"
        />
    </div>
  )
}

