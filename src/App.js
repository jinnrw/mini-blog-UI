import "./App.css";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div className="App max-w-2xl mx-auto">
      <header className="mb-16">
        <h1 className="heading text-center font-bold text-2xl m-5 text-gray-800">
          My Posts
        </h1>
      </header>
      <Posts />
    </div>
  );
}

export default App;
