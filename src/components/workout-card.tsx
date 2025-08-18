interface WorkoutCardProps{
    id: string
    title: string
    durationMinutes: number
    intensity: 1 | 2| 3 | 4 | 5
    date: string
}

export function WorkoutCard(props:WorkoutCardProps){
    return(
        <>
            <div style={{border: "1px solid white", padding: "1rem"}}>
                <h2>{props.title}</h2>
                <p>Duração:{props.durationMinutes}min</p>
                <p>Intensidade: {props.intensity}/5</p>
                <p>Data: {props.date}</p>
            </div>
         </> /*fragment*/
    )
}