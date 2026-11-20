import './App.css'
import Header from "./components/Header"
import Home from "./pages/Home"
import {Routes, Route} from "react-router"
import PostDetail from "./pages/PostDetail"


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/posts/:postId" element={<PostDetail />} />
      </Routes>
    </div> 
  )
}

export default App
