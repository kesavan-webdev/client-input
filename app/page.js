import Link from "next/link";

export default function Home() {
  return (
    <header>
      <h3>
        <Link href={"/client"}>Client</Link>
      </h3>
      <h3>
        <Link href={"/employee"}>Employee</Link>
      </h3>
    </header>
  );
}
