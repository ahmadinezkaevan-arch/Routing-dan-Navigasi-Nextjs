//src/app/page.tsx
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>Perpustakaan Sekolah </h1>
            <h2>Buku Fiksi</h2> 
            <h2>Buku sains</h2>
            <h2>Buku sejarah</h2>
            <Link href="/">Beranda</Link>
        </div>
    );
}