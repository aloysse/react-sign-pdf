import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./styleSheet/custom.scss";

function App() {
  return (
    <div>
      App
      <Button variant="S1" className="rounded-8">
        ABC
      </Button>
      <div className="shadow">1234</div>
      <p className="text-S1">fASDF</p>
    </div>
  );
}

export default App;
