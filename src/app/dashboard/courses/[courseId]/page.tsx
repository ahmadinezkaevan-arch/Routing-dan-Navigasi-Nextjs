//src/app/dashboard/courses/[courseId]/page.tsx
type Props = {
    params: {
        courseId: string
    }
}

export default function CourseDetails({ params }: Props) {
    return (
        <h1>Melihat Materi Bab {params.courseId}</h1>
    );
}