import Header from "/src/Components.jsx/Header.jsx";
import Background from "./Background.jsx";
import TopicProvider from "../Contests/TopicContext.jsx";
import Cards from "./Cards.jsx";

function App() {
  return (
    <div >
      <Header />
      <main className="overflow-hidden ">
        <TopicProvider>
          <Background/>
          <Cards/>
        </TopicProvider>
      </main>
    </div>
  );
}

export default App;
