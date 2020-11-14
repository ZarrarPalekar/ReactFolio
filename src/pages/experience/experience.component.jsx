import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_TI from "../../assets/img/experience/ti.jpg";
import L_NG from "../../assets/img/experience/newgen.svg";
import L_TM from "../../assets/img/experience/techmahindra.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={L_TI}
                  alt="TI logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Senior Software Developer
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      .Net Full Stack Developer
                    </strong>
                    <br />
                    <strong>Technology:</strong> .NET, C#, MS-SQL
                    <br />
                    <strong>Duration:</strong> Oct 2019 - Present
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Developed &amp; enhanced</strong> multiple
                        features for our web based CRM &amp; CMS Systems.
                      </li>
                      <li>
                        <strong>Developed</strong> automated mailer applications
                        as well as JSON based Web APIs for the clients.
                      </li>
                      <li>
                        <strong>Created from scratch</strong> many small modules
                        which used to come to us as manual tasks daily so as to
                        reduce our manual task load.
                      </li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={L_NG}
                  alt="NG logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Software Engineer
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      .Net Full Stack Developer
                    </strong>
                    <br />
                    <strong>Technology:</strong> .NET, C#, MS-SQL
                    <br />
                    <strong>Duration:</strong> Apr 2019 - Oct 2019
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Developed &amp; enhanced</strong> products like
                        OmniDocs.
                      </li>
                      <li>
                        <strong>Developed</strong> automated mailer applications
                        for the clients.
                      </li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={L_TM}
                  alt="TM logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Software Engineer
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      .Net Full Stack Developer
                    </strong>
                    <br />
                    <strong>Technology:</strong> .NET, C#, MS-SQL
                    <br />
                    <strong>Duration:</strong> Mar 2017 - Apr 2019
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Developed &amp; enhanced</strong> multiple
                        features for our web based CRM &amp; CMS Systems.
                      </li>
                      <li>
                        <strong>Developed</strong> Web APIs for the clients
                        other UI projects.
                      </li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
