import "./recuiter.css";
import {Link} from "react-router-dom"
function recuiter() {
  return (
    <div className="all">
      <h2 className="heading">
        Here are my contact details if you want me to make any Improvements or
        if you wish to contact me!!
      </h2>
      <img src="/contact.png" alt="Car" />

      <div className="container">
        <p>
          <span>Name:</span> Muhammd Usman
        </p>
        <p>
          <span> Email:</span> uthmanalfaris@gmail.com
        </p>
        <p>
          <span>Phone: </span> +60 123103231 (Malaysia)
        </p>
        <p>
          <span>LinkedIn: </span>
          <a href="https://www.linkedin.com/in/muhammed-usman-224188134/">
            My LinkedIn Profile
          </a>
        </p>
      </div>
      <button className="my-button">
        <Link to="/" className="link">Back</Link>
      </button>
    </div>
  );
}

export default recuiter