import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import App from "./lang-context/AppLang";
import RegistrationForm from "./registrationForm/RegistrationForm";

// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>,
//     document.getElementById('root')
// );

ReactDOM.render(<RegistrationForm />, document.getElementById("root"));
