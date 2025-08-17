import Header from "./Header.jsx";
import Background from "./Background.jsx";
import TopicProvider from "../Contests/TopicContext.jsx";
import Cards from "./Cards.jsx";
import GrowCard from "./GrowCard.jsx";

function App() {
  return (
    <div>
      <Header />
      <main className="overflow-hidden">
        <TopicProvider>
          <Background />
          <Cards />
          <GrowCard />
        </TopicProvider>
      </main>
    </div>
  );
}

export default App;

