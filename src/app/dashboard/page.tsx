//src/app/dashboard/page.tsx
import Link from "next/link";

export default function Dashboard() {
    return (
        <div>
            <h1>Selamat datang di Portal Sekolah</h1>
            <Link href="/dashboard/teachers">Daftar Guru</Link>
            <br/>
            <Link href="/dashboard/library">Perpustakaan</Link>
        </div>
    );
}