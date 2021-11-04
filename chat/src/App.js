import Message from "./Message";

function App(props) {
  return (
    <div className="app">
      <Message messageText={props.appText} />
    </div>
  );
}

export default App;
