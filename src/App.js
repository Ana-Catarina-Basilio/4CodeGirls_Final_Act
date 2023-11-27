import './App.css';
import Team from './Team';

function App() {
  return (
    <div className= "app-container">
    <h1 className = "introduction">Team Introduction</h1>
      <Team name="Kemi"  hobby="travelling ✈️" reason="I love experiencing new culture" color ="purple" />
      <Team name ="Catarina" hobby="Kickboxing 🥊" reason="there is no better way to let some steam off! It makes me feel empowered!" color="Orange"/>
      <Team name ="" hobby ="" reason ="" color="" />
      <Team name ="" hobby ="" reason ="" color=""/>
      <Team name ="" hobby ="" reason ="" color=""/>
      <Team name ="" hobby ="" reason ="" color=""/>
    </div>
  );
}

export default App;
