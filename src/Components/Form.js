import { React , useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Img from '../img/ContactUs.png'

const Form = ()=>{
    const Details = {
        firstName: '',
        lastName :'',
        email:'',
        phoneNum:'',
        msg:''

    }
    const [formDetails , setformDetails] = useState(Details);
    const [buttonContext , setbuttonContext] = useState('Send');
    // const[status , setstatus] = useState({});
    const onUpdate = (cat , value) => {
        setformDetails({
            ...Details,
            [cat] : value
        })

    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setbuttonContext("Sending...");
    //     let response = await fetch("http://localhost:5000/contact", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //       },
    //       body: JSON.stringify(formDetails),
    //     });
    //     setbuttonContext("Send");
    //     let result = await response.json();
    //     setformDetails(formInitialDetails);
    //     if (result.code == 200) {
    //       setstatus({ succes: true, message: 'Message sent successfully'});
    //     } else {
    //       setstatus({ succes: false, message: 'Something went wrong, please try again later.'});
    //     }
    //   };
    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center" >
                    <Col md={6}>
                        <img src={Img} alt="Contact image"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        {/* <form onSubmit={handleSubmit}> */}
                        <form>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={Details.firstName} placeholder="First Name" onChange={(e) => onUpdate('firstName' , e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={Details.lastName} placeholder="Last Name" onChange={(e) => onUpdate('lastName' , e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={Details.email} placeholder="Email" onChange={(e) => onUpdate('email' , e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={Details.phoneNum} placeholder="Phone Number" onChange={(e) => onUpdate('phoneNum' , e.target.value)}/>
                                </Col>
                                <Col>
                                    <textarea rows="6" value={Details.msg} placeholder="Message" onChange={(e) => onUpdate('msg' , e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonContext}</span></button>
                                </Col>
                                {/* {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                } */}
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Form