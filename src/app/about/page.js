import Link from "next/link";


export default function About() {
  return (
    <main>
    <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div>
        <h1 style={{ textAlign: "center", fontSize: "28px", fontWeight: "600" }}>
          ABOUT PAGE
        </h1>
      </div>
      <div>
        <Link href="/">← Back to Home</Link>
      </div>
    </div>
    </main>
  );
}