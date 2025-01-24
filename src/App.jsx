import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <Player name="Player1" symbol="X" />
          </li>
          <li>
            <Player name="Player2" symbol="O" />
          </li>
        </ol>
      </div>
    </main>
  );
}

export default App;
