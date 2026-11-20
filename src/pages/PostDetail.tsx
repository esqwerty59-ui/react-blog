import {useParams, Link} from "react-router"
import {posts} from "../data/posts"


function PostDetail () {
    const {postId} = useParams();
    const post = posts.find( (post) => post.id === Number(postId) );

    if (!post) {
        return <div> 記事がみつかりません </div>
    }

    return (
        <div className="mx-auto max-w-3xl text-lg py-5"> 
            <img src={post.thumbnailUrl} alt={post.title} className="w-full" />
            <div className="flex my-2 items-center gap-2 text-base text-gray-600">
                {new Date(post.createdAt).toLocaleDateString("ja-JP", { year: "numeric", month: "short", day: "numeric"})} 
                {post.categories.map ( (category) => (
                <div key={category} className="rounded-full bg-gray-200 px-2 py-2"> 
                    {category} 
                </div>
                ))}
            </div>
            <div className="my-3 text-2xl font-bold">{post.title}</div> 
            <div dangerouslySetInnerHTML = {{ __html: post.content }} className="leading-relaxed text-gray-600"/>
            <div className="py-6"> <Link to="/" className="text-blue-600">記事一覧へ戻る</Link> </div>
        </div>
    )
}

export default PostDetail