import styles from "./App.module.css";
import IntroductionSection from "./components/IntroductionSection";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <IntroductionSection />
    </div>
  );
}

export default App;
