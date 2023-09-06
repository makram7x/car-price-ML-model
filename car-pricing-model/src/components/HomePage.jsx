/*import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Recruiter from "../components/recuiter";
import Buisness from "../components/buisness";
import Data from "../components/data";
import Model from "../components/model"; */
import "../App.css";

function HomePage() {
  return (
    <div className="background">
      <h1>Analysis and ML model of over 70k Car Data in Malaysia</h1>
      <img src="/work.jpg" alt="Car" />
      <h1>Introduction🧪</h1>
      <h2>[insert Introduction here]</h2>
      <h2> Car price predictor Model 🔦</h2>
      <p className="para">
        Introducing My dynamic AI coalition - a fusion of Hypertuned Decision
        Tree, Random Forest, KNN, and Gradient Boosting regressors, working in
        harmonious precision to predict your car-s worth with an astonishing 97%
        accuracy. 🎯🔮 Feed in your car details and see AI magic!
      </p>
      <button className="my-button">Go to model</button>
      <h2>I am a Data scientist💻</h2>
      <p className="para">
        🔍 To understand more about what-s going on under the hood of the
        project...the ML models and the statistics behind it.
      </p>
      <button className="my-button">Go to Data Scientist</button>
      <h2>I have a vehicle-related business 💡</h2>
      <p className="para">
        This Tab will provide you an incredible insight on how you can buy and
        sell for your business or if you want to know more about cars Data in
        Malaysia!!.
      </p>
      <button className="my-button">Go to Business</button>
      <h2>I am a Recruiter and would love to connect 💳</h2>
      <p className="para">
        Find my contact info in this tab if you need me to add anything more!!!
      </p>
      <button className="my-button">
        <a href="/recuiter">Go to Recruiter</a>
      </button>
    </div>
  );
}

export default HomePage