import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2> TodoList App in Redux</h2>

        <form>
          <input
            placeholder="Enter a Todo"
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20
            }}

          />

          <button type="submit"
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 20,
              marginLeft: 20
            }}
          >Go</button>

        </form>
        <ul className="allTodos">
          <li className="singleTodo">
            <span className="todoText">
              First Todo
                </span>
            <button
              style={{
                borderRadius: 25,
                padding: 10,
                border: "1px solid white",
                color: "white",
                backgroundColor: "orangered"
              }}>
              delete
                </button>
          </li>
        </ul>
      </header>


    </div>
  );
}

export default App;
