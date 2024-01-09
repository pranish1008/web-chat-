import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import homepage from './Pages/homepage';
import chatpage from './Pages/chatpage';

function App() {
  return (
    <div className="App">
      <Route path='/'  component={homepage} exact />
      <Route path='/chats'  component={chatpage}/>
    </div>
  );
}

export default App;
