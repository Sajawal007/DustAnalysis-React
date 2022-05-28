import "./styles.css";
import "materialize-css/dist/css/materialize.min.css";
import "material-icons-react";
import Menu from "./Menu";
import BottomNav from "./BottomNav";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="App">
          <div className="row">
            <div className="col s8">
              <h1 className="brand-logo">Dust Analysis</h1>
              <Menu />
            </div>
          </div>
          <BottomNav />
        </div>
      </div>
    </>
  );
}
