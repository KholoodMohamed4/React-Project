import { React, useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import myImg from "../img/mee.png";

const HomePage = () => {
  const [loop, setloop] = useState(0);
  const [Del, setDel] = useState(false);
  const track = ["Software Engineer", "Web Developer", "Frontend Developer"];
  const [text, settext] = useState("");
  const period = 2000;
  const [delta, setdelta] = useState(300 - Math.random() * 10);
  useEffect(() => {
    let fun = setInterval(() => {
      fun2();
    }, delta);

    return () => {
      clearInterval(fun);
    };
  },[text]);

  const fun2 = () => {
    let i = loop % track.length;
    let fullText = track[i];
    let updatedText = Del
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    settext(updatedText);

    if (Del) {
      setdelta((i) => i / 2);
    }
    if (!Del && updatedText === fullText) {
      setDel(true);
      setdelta(period);
    } else if (Del && updatedText === '') {
        setDel(false);
        setloop(loop + 1);
        setdelta(500);
      
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>

            <h1>
              {`Hi i'm Kholood Mohamed`} <br/> {"i'm"} <span className="wrap">{text}</span>
            </h1>
            <button onClick={() => console.log("Connect")}>
              Let’s Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={myImg} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default HomePage;
