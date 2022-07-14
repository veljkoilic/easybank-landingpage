import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { LatestArticles } from "./components/LatestArticles";
import { Why } from "./components/Why";

function App() {
  return (
    <main className="App">
      <Header/>
      <Intro/>
      <Why/>
      <LatestArticles />
      <Footer/>
    </main>
  );
}

export default App;
