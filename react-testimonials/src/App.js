
import './App.css';
import {Testimony} from './components/Testimony'

function App() {
  return (
    <div className="App">
      <div className='main-container'>
      <h1>Esto es lo que nuestros alumnos opinan de nosotros!</h1>
        <Testimony
          name='Juan Carlos Baglietto'
          country='France'
          img='Juan-Carlos'
          charge='software enginner'
          company='Spotify'
          testimony=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa quia dolore possimus omnis odit ea laudantium, consectetur iure quae nihil vitae, eaque sequi ipsam necessitatibus, dolor nostrum obcaecati voluptate!' />
        <Testimony
          name='Jackie Chan'
          country='England'
          img='Jackie-Chan'
          charge='Developer'
          company='Facebook'
          testimony=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa quia dolore possimus omnis odit ea laudantium, consectetur iure quae nihil vitae, eaque sequi ipsam necessitatibus, dolor nostrum obcaecati voluptate!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa quia dolore possimus omnis odit ea laudantium, consectetur iure quae nihil vitae, eaque sequi ipsam necessitatibus, dolor nostrum obcaecati voluptate!' />
        <Testimony
          name='Ramona Galarza'
          country='Argentina'
          img='Ramona'
          charge='DevOps Engineer'
          company='Mercado Libre'
          testimony=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa quia dolore possimus omnis odit ea laudantium, consectetur iure quae nihil vitae, eaque sequi ipsam necessitatibus, dolor nostrum obcaecati voluptate!  Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
        
      </div>
    </div>
   
  );
}

export default App;
