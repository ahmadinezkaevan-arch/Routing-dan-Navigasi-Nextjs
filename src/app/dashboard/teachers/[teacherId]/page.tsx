//src/app/products/[productId]/page.tsx
type Props = {
    params: {
        teacherId: string
    }
}

export default function TeacherDetail({ params }: Props) {
    return (
        <h1>Melihat profil Akademik untuk Guru: {params.teacherId}</h1>
    );
}