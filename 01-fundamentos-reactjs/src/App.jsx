import {Post} from './Post'
import { Header } from './components/Header'
import "./global.css"

export function App() {

  return (
    <>
    <Header/>

      <Post 
        author="Vinicius Filenga" 
        content="Loren ipsum Loren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsum"/>
      <Post 
        author="Gabriel" 
        content="Loren ipsum Loren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsum"/>
    </>
  )
}

