import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import styles from "./App.module.css";

const App = () => {
  return (
    <main className={styles.app}>
      <Navbar />
      <Hero />
      <Projects /> 
    </main>
  );
};

export default App;