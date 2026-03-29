import Link from "next/link";


export default function Stories() {
  return (
    <main>
    <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div>
        <h1 style={{ textAlign: "center", fontSize: "28px", fontWeight: "600" }}>
          STORIES PAGE
        </h1>
      </div>
      <div>
        <Link href="/">← Back to Home</Link>
      </div>
    </div>
    </main>
  );
}