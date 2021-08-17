import React from "react";
import FormComponent from "../../components/Form/form";
import Footer from "../Footer/footer";
import "./HomePage.css";

function App() {

  return (
    <div className="home-parent">
      <div className="form">
        <FormComponent />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
