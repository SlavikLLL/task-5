import Card from "./components/Card";
import Clock from "./components/Clock";
import Fetch from "./components/Fetch";

function App() {
  return (
    <div className="tasks">
             <Card>
               <Card.Title>Title</Card.Title>
               <Card.Body>Body body body</Card.Body>
           </Card>
           <hr/>
           <Clock />
           <Fetch />
    </div>
   
  );
}

export default App;
