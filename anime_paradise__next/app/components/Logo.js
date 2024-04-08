import Link from "next/link";

export default function Logo() {
  return (
      <Link href={"/"} className="logo">
        <div className="headerFL">ANIME</div>
        <div className="headerSL">Paradise</div>
      </Link>
  );
}
