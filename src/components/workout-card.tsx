interface WorkoutCardProps {
    id: string;
    title: string;
    durationMinutes: number;
    intensity: 1 | 2 | 3 | 4 | 5;
    date: string;
}

export function WorkoutCard(props: WorkoutCardProps) {
    return (
        <>
            <div>
                <h2>{props.title}</h2>
                <p>{props.durationMinutes}</p>
                <p>{props.intensity}</p>
                <p>{props.date}</p>
            </div>
        </>
    )
}