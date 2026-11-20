import { posts } from "../data/posts" 
import { Link }  from "react-router"


function Home() {

    return (
        <div className="mx-auto max-w-6xl px-4">
            <div className="my-8 text-3xl font-bold">記事一覧</div>
                {posts.map( (post) => (
                <Link key={post.id} to={`/posts/${post.id}`} className="flex gap-5 text-lg border-b border-gray-300 py-5"> 
                    <img src={post.thumbnailUrl} alt={post.title} className="w-[30%]" />
                    <div> 
                    <div className="flex items-center gap-2 text-gray-600">
                        {new Date(post.createdAt).toLocaleDateString("ja-JP", { year: "numeric", month: "short", day: "numeric"})} 
                        {post.categories.map ( (category) => (
                        <div key={category} className="rounded-full bg-gray-200 px-3 py-1"> 
                            {category} 
                        </div>
                        ))}
                    </div>
                    <div className="my-3 text-2xl font-bold">{post.title}</div> 
                    <div dangerouslySetInnerHTML = {{ __html: post.content }} className="line-clamp-2 leading-relaxed text-gray-600"/>
                    </div>
                </Link>
                ))}
        </div>
    )
}

export default Home
