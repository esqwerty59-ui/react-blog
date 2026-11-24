import type { Post } from "../types/post";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

function PostDetail() {
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [post, setPost] = useState<Post | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetch(
          `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${postId}`,
        );

        if (response.status === 404) {
          return;
        }
        if (!response.ok) {
          throw new Error(`記事の取得に失敗しました(${response.status})`);
        }

        const data = await response.json();
        setPost(data.post);
      } catch (error) {
        setIsError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getPost();
  }, [postId]);

  if (isLoading) {
    return <div> 読み込み中 </div>;
  }
  if (isError) {
    return <div> エラーが発生しました </div>;
  }
  if (!post) {
    return <div> 記事がみつかりません </div>;
  }

  return (
    <div className="mx-auto max-w-3xl text-lg py-5">
      <img src={post.thumbnailUrl} alt={post.title} className="w-full" />
      <div className="flex my-2 items-center gap-2 text-base text-gray-600">
        {new Date(post.createdAt).toLocaleDateString("ja-JP", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
        {post.categories.map((category) => (
          <div key={category} className="rounded-full bg-gray-200 px-2 py-2">
            {category}
          </div>
        ))}
      </div>
      <div className="my-3 text-2xl font-bold">{post.title}</div>
      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        className="leading-relaxed text-gray-600"
      />
      <div className="py-6">
        {" "}
        <Link to="/" className="text-blue-600">
          記事一覧へ戻る
        </Link>{" "}
      </div>
    </div>
  );
}

export default PostDetail;
