import './App.css'
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About';
function App() {
  return (
    <>
    <Navbar title="TextUtils" item1="Home" item2 ="About Us"/>
    {/* <TextForm/> */}
    <About/>

    </>
  );
}

export default App;
