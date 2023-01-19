import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Homepage from './Homepage'
import './App.css';
import QuizGame from './Quiz';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/Quiz' element={<QuizGame/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
