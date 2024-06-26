import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row ,  Col} from "react-bootstrap";
import img1 from '../img/80.svg';
import img2 from '../img/90.svg';
import img3 from '../img/98.svg';

const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="skill" id="skills">
            <Row>
                <Col >
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>Some of my skills</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={img3} alt=""/>
                                <h5>HTML & HTML5 </h5>
                            </div>
                            <div className="item">
                                <img src={img3} alt=""/>
                                <h5>CSS & CSS3 </h5>
                            </div>
                            <div className="item">
                                <img src={img2} alt=""/>
                                <h5>Bootstrap </h5>
                            </div>
                            <div className="item">
                                <img src={img1} alt=""/>
                                <h5>JavaScript </h5>
                            </div>
                            <div className="item">
                                <img src={img1} alt=""/>
                                <h5>React JS </h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </section>
      )
}
export default Skills