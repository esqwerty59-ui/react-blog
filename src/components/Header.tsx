import { Link } from "react-router"

function Header() {

  return (
    <header className="flex h-18 items-center justify-between bg-neutral-800 px-6 text-white">
      <Link to="/" className="text-xl font-bold">Blog</Link>
      <div className="text-xl font-bold">お問い合わせ</div>
    </header>
  )
}

export default Header