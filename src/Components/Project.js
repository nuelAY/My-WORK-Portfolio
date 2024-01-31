import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjectCard from "../Components/ProjectCard";
import colorSharp2 from "../Assets/img/color-sharp2.png";
import projImg1 from "../Assets/img/project-img1.png";
import projImg2 from "../Assets/img/project-img2.png";
import projImg3 from "../Assets/img/project-img3.png";
import projImg4 from "../Assets/img/project-img4.png";
import projImg5 from "../Assets/img/project-img5.png";
import projImg6 from "../Assets/img/project-img6.png";



const Project = () => {

    const projects = [
        {
            title: "Feedback UI",
            description: "HTML, css and Js",
            link: "https://github.com/nuelAY/My-Feedback-App",
            link1: "https://my-feedback-app.vercel.app/",
            imgUrl: projImg1,
        },
        {
            title: "Cardtonic Clone",
            description: "React, framer-motion",
            link: "https://github.com/nuelAY/Cardtonic-Clone",
            link1: "https://cardtonic-clone-five.vercel.app/",
            imgUrl: projImg4,
        },
        {
            title: "Cloud Management App",
            description: "React & Tailwind CSS",
            link: "https://github.com/nuelAY/Cloud-App-Tailwind-CSS",
            link1: "https://cloud-app-tailwind-css.vercel.app/",
            imgUrl: projImg3,
        },
        {
            title: "Store Dashboard",
            description: "React and Tailwind CSS",
            link: "https://github.com/nuelAY/Store-Dashboard",
            link1:"https://store-dashboard-three.vercel.app/",
            imgUrl: projImg5,
        },
        {
            title: "Porfolio Template",
            description: "HTML, css and javascript",
            link: "https://github.com/nuelAY/Portfilio-project",
            link1: "https://portfilio-project.vercel.app/",
            imgUrl: projImg2,
        },
        {
            title: "Github Finder App",
            description: "React, Tailwind CSS, Axios, DaisyUI",
            link: "https://github.com/nuelAY/Github-Finder",
            link1: "https://github-finder-psi-five.vercel.app/",
            imgUrl: projImg6,
        },
    ];

  return (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <Tab.Container id="projects-tab" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center" id="pills-tab">
                        <Nav.Item>
                            <h2>
                                <Nav.Link eventKey="first">My Projects </Nav.Link>
                            </h2>
                        </Nav.Item>
                    </Nav>
                
                    
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                           <ProjectCard
                                            key={index}
                                            {...project}
                                           />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} />
    </section>
  )
}

export default Project