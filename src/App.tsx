import { Header } from "./components/header";
import { WorkoutCard } from "./components/workout-card";

function App() {
  return (
    <>
      <Header/>

      <main>
          <WorkoutCard
          id="1"
          date="20/05/2026"
          durationMinutes={45}
          intensity={4}
          title="Aula de Zumba"
        />
      </main>
    </>

  );
}

export default App;
