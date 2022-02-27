import "../styles/home.css";
import Carousel from "react-elastic-carousel";
import { customerLogos } from "./images/imports";

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <div className="banner__img">
          <div className="banner__textbox">
            <div className="banner__text">
              lorem ipsum dolor sit amet, consectetur adip
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="features">
          <div className="feature__box">
            <h2 className="feature__title">Consequat ipsum irure</h2>
            <p className="feature__description">
              Proident elit dolor deserunt aliquip aute eu. Quis sunt in
              reprehenderit voluptate incididunt mollit quis ex eu. Irure id
              occaecat ullamco velit qui deserunt sit qui. Eiusmod non est
              reprehenderit nulla ullamco consectetur veniam adipisicing
              excepteur. Sint nulla nostrud in deserunt duis tempor consectetur.
            </p>
          </div>
          <div className="feature__box">
            <h2 className="feature__title">Consequat ipsum irure</h2>
            <p className="feature__description">
              Proident elit dolor deserunt aliquip aute eu. Quis sunt in
              reprehenderit voluptate incididunt mollit quis ex eu. Irure id
              occaecat ullamco velit qui deserunt sit qui. Eiusmod non est
              reprehenderit nulla ullamco consectetur veniam adipisicing
              excepteur. Sint nulla nostrud in deserunt duis tempor consectetur.
            </p>
          </div>
          <div className="feature__box">
            <h2 className="feature__title">Consequat ipsum irure</h2>
            <p className="feature__description">
              Proident elit dolor deserunt aliquip aute eu. Quis sunt in
              reprehenderit voluptate incididunt mollit quis ex eu. Irure id
              occaecat ullamco velit qui deserunt sit qui. Eiusmod non est
              reprehenderit nulla ullamco consectetur veniam adipisicing
              excepteur. Sint nulla nostrud in deserunt duis tempor consectetur.
            </p>
          </div>
        </div>

        <span className="line"></span>

        <div className="customers">
			<h2 className='customers__title'>Наши клиенты</h2>
          <Carousel itemsToShow={3} itemsToScroll={3}>
            {customerLogos.map((logo, index) => (
              <img src={logo} key={index} alt="company-logo"></img>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Home;
