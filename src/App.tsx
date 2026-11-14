import './App.css'
import Header from "./components/Header"
import { posts } from "./data/posts"; 


function App() {

  return (
    <div>
      <Header />
      {posts.map( (post) => (
      <div key={post.id}> 
      {post.title} 
      {post.createdAt} 
      {post.categories.map ( (category) => (
      <div key={category}> {category} </div> ) )}
      <img src={post.thumbnailUrl} alt={post.title} />
      <div dangerouslySetInnerHTML = {{ __html: post.content }} />
      </div>
      ))}
    </div> 
  )
}

export default App
