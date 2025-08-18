import { Header } from "./components/header";
import { WorkoutCard } from "./components/workout-card";

function App() {
  return (
    <>
      <h1>big foooodase f</h1>
      <Header/>

      <main>
          <WorkoutCard
          id="1"
          date="20/05/2027"
          durationMinutes={45}
          intensity={4}
          title="calaboca"
          />
      </main>
    </>
  );
}

export default App;
