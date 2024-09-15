
import './App.css';
import Buttons from './Buttons';
import Header from './Header'
import './button.css'

function App() {
  return (
    <div>
      <Header text={"this is a header "} st={{ color:'red', backgroundcolor:'yellow', fontSize: '20px'}} />
      <Header text={"this is header 2"} st={{ color: 'yellow'}}/>
      <Buttons/>
      
    </div>
  );
}

export default App;
