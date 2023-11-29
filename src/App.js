import './App.css';
import Team from './Team';

function App() {
  return (
    <div className= "app-container">
    <h1 className = "introduction">Team Introduction</h1>
      <Team name="Kemi"  hobby="travelling ✈️" reason="I love experiencing new culture" color ="purple" />
      <Team name ="Catarina" hobby="Kickboxing 🥊" reason="there is no better way to let some steam off! It makes me feel empowered!" color="Orange"/>
      <Team name ="Charlotte" hobby ="Hiking ⛰️" reason ="I love to recharge in nature, having a picnic at a mountain peak is the best!" color="green" />
      <Team name ="Lauren" hobby ="Karaoke 🎤" reason ="it's an amazing stress-reliever! Plus you get to unleash your inner pop-star! ;)" color="red"/>
      <Team name ="Jess" hobby ="Mountaineering ⛰️" reason ="I love the challenge and literally pushing myself to new heights!" color="green"/>
      <Team name ="Sophia" hobby ="Live music! 🎵" reason ="You get to see and feel the musician’s passion and experience the performance with everyone at the event. " color="yellow"/>
    </div>
  );
}

export default App;
