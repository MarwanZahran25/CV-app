import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonalInfo from "./components/PersonalInfo";
import "./App.css";
import PreviousExpriance from "./components/PreviousExpriance";
import EducationForm from "./components/EducationForm";

function App() {
  return (
    <div className="bg-gray-100 min-h-[100vh] ">
      <Header text="CV Builder" />
      <PersonalInfo />
      <PreviousExpriance />
      <EducationForm />
      <Footer />
    </div>
  );
}

export default App;
