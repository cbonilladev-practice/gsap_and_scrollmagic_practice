import './App.css';
import AnimateSquares from './components/AnimateSquares';
// import gsap from 'gsap'
import AnimateText from './components/AnimateText';

function App() {
  return (
    <div className="App">
      <AnimateText/>
      <AnimateSquares/>
    </div>
  );
}

export default App;
