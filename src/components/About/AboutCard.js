import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yashasvi Pandey </span>
            from <span className="purple"> Ghaziabad, India.</span>
            <br />
            I am currently pursuing BCA (Hons.) at CHRIST (Deemed to be University), Delhi NCR Campus.
            <br />
            I have hands-on experience in Web Development, AI/ML and Database Management. 
            <br />Actively working on real-world projects, internships, and technical events.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Designing posters
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Leadership begins when skills are used to uplift others.!"{" "}
          </p>
          <footer className="blockquote-footer">Yashasvi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
