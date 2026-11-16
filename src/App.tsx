import './App.css'
import Header from "./components/Header"
import { posts } from "./data/posts"; 


function App() {

  return (
    <div>
      <Header />
      <div className="mx-auto max-w-6xl">{posts.map( (post) => (
       <div key={post.id} className="border-b border-gray-300 p-4 flex gap-5"> 
        <img src={post.thumbnailUrl} alt={post.title} className="w-1/4" />
        <div> 
          <div className="flex items-center gap-2">
          {new Date(post.createdAt).toLocaleDateString("ja-JP", { year: "numeric", month: "short", day: "numeric"})} 
          {post.categories.map ( (category) => (
          <div key={category} className="bg-gray-200 px-2 py-1 rounded-full"> {category} </div> ) )}
          </div>
          {post.title} 
          <div dangerouslySetInnerHTML = {{ __html: post.content }} />
        </div>
      </div>
      ))}
      </div>
    </div> 
  )
}

export default App
