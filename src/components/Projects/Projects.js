import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/google.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/todo.png";
import chatify from "../../Assets/Projects/qr.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Accident classification model"
              description="During my Intern at L&T IDPL, I built various Classification Models on the real time data provided by the Company"
              ghLink="https://github.com/sasukexo/intern"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="QR-generator"
              description="The QR code generator is a website constructed using HTML, CSS, and JavaScript. It enables the transformation of various values such as URLs, names, and more into QR codes. Additionally, users have the ability to modify the QR code's color and padding settings."
              ghLink="https://github.com/sasukexo/qr-generator"
              demoLink="https://qr.sasuke.me/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description=""
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Todo-app"
              description="To-do is a Python Django-based todo app with HTML/CSS frontend, offering create, update, and delete functions. It provides users with a simple yet efficient way to manage tasks securely and with a visually appealing interface. Stay organized and productive with TaskMeUp"
              ghLink="https://github.com/sasukexo/todo-app"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Google search clone"
              description="Built a replica of Google Search Engine which can send query requests to Google servers. The web application can do Normal search, Image search and Advanced search"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://sasukexo.github.io/cs50/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description=""
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
