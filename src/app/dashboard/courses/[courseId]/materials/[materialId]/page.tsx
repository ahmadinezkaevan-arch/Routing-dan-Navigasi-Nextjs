//src/app/dashboard/courses/[courseId]/materials/[materialId]/page.tsx
type Props = {
    params: {
        courseId: string
        materialId: string
    }
}

export default function materialDetails({ params }: Props) {
    return (
        <h1>Melihat Materi {params.materialId} untuk mata pelajaran {params.courseId}</h1>
    );
}