import './App.css';
import AnimateSquares from './components/AnimateSquares';
// import gsap from 'gsap'
import AnimateText from './components/AnimateText';
import SideScroll from './components/SideScroll';

function App() {
  return (
    <div className="App">
      <AnimateText/>
      <AnimateSquares/>
      <SideScroll/>
    </div>
  );
}

export default App;
