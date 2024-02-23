import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./Card";
import URLimg1 from "../img/one.jpg"
import URLimg2 from "../img/two.jpg"
import URLimg3 from "../img/Animation.jpg"
import URLimg4 from "../img/three.jpg"
import URLimg5 from "../img/dejaVu.jpg"
import URLimg6 from "../img/four.jpg"
import Form from "./Form";
const MyProjects = () => {
  const projects = [
    {
      title:"LuxeLiving Store",
      desc: "HTML & CSS Project",
      URl: URLimg1,
      link:"https://kholoodmohamed4.github.io/project_html_css/"
    },
    {
      title:"Perfume Store",
      desc: "HTML5 & CSS3 Project",
      URl: URLimg2,
      link:"https://kholoodmohamed4.github.io/Project2-CSS3-HTML5/"
    },
    {
      title:"Animation Project",
      desc: "CSS3 Project",
      URl: URLimg3,
      link:"https://kholoodmohamed4.github.io/Animation-Project/"
    },
    {
      title:"Shine & Sparkle Store",
      desc: "Bootstrap Project",
      URl: URLimg4,
      link:"https://kholoodmohamed4.github.io/Project3-Bootstrap/"
    },
    {
      title:"Deja Vu Store",
      desc: "Simple JS Project",
      URl: URLimg5,
      link:"https://kholoodmohamed4.github.io/deja-vu-JS-Project/"
    },
    {
      title:"WristArc Store",
      desc: "JavaScript Project",
      URl: URLimg6,
      link:"https://kholoodmohamed4.github.io/JS-Project/"
    }
  ];

  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>You can see some of my projects here</p>
            <Tab.Container id="projects-tabs" defaultActiveKey={"first"}>
              <Nav  variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Section 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Section 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Section 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                        projects.map((i, index)=>{
                            return(
                                <ProjectCard
                                 key={index}
                                  {...i} />
                            )
                        })
                    }

                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second"><Form /></Tab.Pane>
                <Tab.Pane eventKey="third" >
                  <h3 className="text-center">
                    Hello, I am <span className="MyName">Kholood Mohamed</span>, a front-end developer
                  </h3>
                  <p>I am 21 years old from Sohag</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyProjects;
