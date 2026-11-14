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
      {new Date(post.createdAt).toLocaleDateString("ja-JP", { year: "numeric", month: "short", day: "numeric"})} 
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
