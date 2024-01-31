import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../Assets/img/meter1.png"
import meter2 from "../Assets/img/meter2.png";
import meter3 from "../Assets/img/meter3.png";
import meter4 from "../Assets/img/meter4.svg";
import meter5 from "../Assets/img/meter5.svg";
import meter6 from "../Assets/img/meter6.svg";
import meter7 from "../Assets/img/meter7.svg";
import meter8 from "../Assets/img/meter8.svg";
import colorSharp from "../Assets/img/color-sharp.png";

const Skills = () => {
  
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

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            My Skills
                        </h2>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image"/>
                                <h5>HTML & CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image"/>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image"/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image"/>
                                <h5>React.Js</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image"/>
                                <h5>Tailwind CSS</h5>
                            </div>
                                <div className="item">
                                <img src={meter8} alt="Image"/>
                                <h5>Styled Components</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image"/>
                                <h5>Framer Motion</h5>
                                </div>
                            <div className="item">
                                <img src={meter7} alt="Image"/>
                                <h5>Firebase</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
 
}

export default Skills