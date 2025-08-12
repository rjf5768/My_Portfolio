import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { projectsData, meta } from "../../content_option";

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ["All", ...new Set(projectsData.map(project => project.category))];
  
  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">My Projects</h1>
            <hr className="t_border my-4 ml-0 text-left" />
            <p className="lead mb-5">
              Explore my diverse portfolio of projects spanning academic research, 
              mobile development, game design, and hardware engineering.
            </p>
          </Col>
        </Row>

        {/* Filter Buttons */}
        <Row className="mb-5">
          <Col lg="12">
            <div className="filter-buttons d-flex flex-wrap gap-2 justify-content-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={activeFilter === category ? "primary" : "outline-primary"}
                  onClick={() => setActiveFilter(category)}
                  className="filter-btn"
                >
                  {category}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Projects Grid */}
        <Row className="projects-grid">
          {filteredProjects.map((project, index) => (
            <Col lg="4" md="6" className="mb-4" key={project.id}>
              <Card 
                className={`project-card h-100 ${hoveredProject === project.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="project-image-container">
                  <Card.Img 
                    variant="top" 
                    src={project.image} 
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <div className="project-actions">
                      {project.demo && (
                        <Button 
                          variant="light" 
                          size="sm" 
                          href={project.demo} 
                          target="_blank"
                          className="me-2"
                        >
                          <i className="fas fa-play me-1"></i>
                          Demo
                        </Button>
                      )}
                      {project.link && project.link !== "#" && (
                        <Button 
                          variant="outline-light" 
                          size="sm" 
                          href={project.link} 
                          target="_blank"
                        >
                          <i className="fas fa-external-link-alt me-1"></i>
                          View
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                
                <Card.Body className="d-flex flex-column">
                  <div className="mb-2">
                    <Badge bg="secondary" className="category-badge">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <Card.Title className="project-title">{project.title}</Card.Title>
                  <Card.Text className="project-description flex-grow-1">
                    {project.description}
                  </Card.Text>
                  
                  <div className="project-technologies mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        bg="light" 
                        text="dark" 
                        className="me-1 mb-1 tech-badge"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <Row className="text-center py-5">
            <Col lg="12">
              <h3>No projects found in this category</h3>
              <p>Try selecting a different filter or check back later for new projects.</p>
            </Col>
          </Row>
        )}
      </Container>
    </HelmetProvider>
  );
};
