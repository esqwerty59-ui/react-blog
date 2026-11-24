import type { Post } from "../types/post";
import { Link } from "react-router";
import { useEffect, useState } from "react";

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getArticle = async () => {
      try {
        const response = await fetch(
          "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts",
        );

        if (!response.ok) {
          throw new Error(`記事一覧の取得に失敗しました(${response.status})`);
        }

        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        setIsError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getArticle();
  }, []);

  if (isLoading) {
    return <div>読み込み中</div>;
  }
  if (isError) {
    return <div>エラーが発生しました</div>;
  }

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="my-8 text-3xl font-bold">記事一覧</div>
      {posts.map((post) => (
        <Link
          key={post.id}
          to={`/posts/${post.id}`}
          className="flex gap-5 text-lg border-b border-gray-300 py-5"
        >
          <img src={post.thumbnailUrl} alt={post.title} className="w-[30%]" />
          <div>
            <div className="flex items-center gap-2 text-gray-600">
              {new Date(post.createdAt).toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
              {post.categories.map((category) => (
                <div
                  key={category}
                  className="rounded-full bg-gray-200 px-3 py-1"
                >
                  {category}
                </div>
              ))}
            </div>
            <div className="my-3 text-2xl font-bold">{post.title}</div>
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="line-clamp-2 leading-relaxed text-gray-600"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;
