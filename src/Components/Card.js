import React from "react";
import { Col } from "react-bootstrap";
const ProjectCard = ({title , desc , URl, link})=>{
    return(
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <a href={link}>
                    <img src={URl} alt="Project Card" className="img-fluid"/>
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{desc}</span>
                    </div>
                </a>
            </div>
            
        </Col>
    )
}
export default ProjectCard