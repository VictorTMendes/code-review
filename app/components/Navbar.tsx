import Link from "next/link"

export default function Navbar() {
  return (
    <nav style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
        <Link href="/">CodeReview</Link> |{" "}
        <Link href="/reviews">Reviews</Link>
    </nav>
  )
}
