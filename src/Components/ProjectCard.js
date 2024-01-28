import { Col } from "react-bootstrap"

const ProjectCard = ({title, description, imgUrl, link, link1}) => {
  return (
   <Col sm={6} md={4}>
    <div className="proj-imgbx">
        <img src={imgUrl}/>
        <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <a href={link} target='#'>Check Code</a>
            <a href={link1} target='#'>Check Website</a>
        </div>
    </div>
   </Col>
  )
}

export default ProjectCard