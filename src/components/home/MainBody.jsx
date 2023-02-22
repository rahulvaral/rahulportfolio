import React from "react";
import Container from "react-bootstrap/Container";
import Typist from "react-typist-component";
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons, img }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="main-container text-center">
          <div className="main-content">
            <h1 ref={ref} className="display-1">
              {title}
            </h1>
            <Typist>
              <div className="h4 typist">{message}</div>
            </Typist>
            <div className="p-sm-5 p-3">
              {icons.map((icon, index) => (
                <a
                  key={`social-icon-${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.url}
                  aria-label={`My ${icon.image.split("-")[1]}`}
                >
                  <i className={`fab ${icon.image}  fa-3x socialicons`} />
                </a>
              ))}
            </div>
            <a
              className="btn btn-outline-light btn-lg "
              href="#aboutme"
              role="button"
              aria-label="Learn more about me"
            >
              More about me
            </a>
          </div>
          <div className="main-img">
            <img src={img} className="rounded mx-auto d-block" />
          </div>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
