import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Card } from "react-bootstrap";
import { contactConfig } from "../../content_option";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export const ContactUs = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Get In Touch</h1>
            <hr className="t_border my-4 ml-0 text-left" />
            <p className="lead mb-5">
              Feel free to reach out to me for collaborations, opportunities, or just to say hello!
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg="8" md="10">
            <Card className="contact-card">
              <Card.Body className="text-center p-5">
                <h2 className="mb-4">Let's Connect</h2>
                <p className="mb-5 text-muted">
                  {contactConfig.description}
                </p>
                
                <Row className="contact-info">
                  <Col md="6" className="mb-4">
                    <div className="contact-item">
                      <div className="contact-icon">
                        <FaEnvelope />
                      </div>
                      <div className="contact-details">
                        <h5>Email</h5>
                        <a 
                          href={`mailto:${contactConfig.YOUR_EMAIL}`}
                          className="contact-link"
                        >
                          {contactConfig.YOUR_EMAIL}
                        </a>
                      </div>
                    </div>
                  </Col>
                  
                  <Col md="6" className="mb-4">
                    <div className="contact-item">
                      <div className="contact-icon">
                        <FaPhone />
                      </div>
                      <div className="contact-details">
                        <h5>Phone</h5>
                        <a 
                          href={`tel:${contactConfig.YOUR_FONE}`}
                          className="contact-link"
                        >
                          {contactConfig.YOUR_FONE}
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>

                <hr className="my-5" />

                <div className="social-links">
                  <h5 className="mb-3">Follow Me</h5>
                  <div className="social-icons">
                    <a 
                      href="https://www.linkedin.com/in/rong-feng-205b022a1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon linkedin"
                    >
                      <FaLinkedin />
                    </a>
                    <a 
                      href="https://github.com/rjf5768"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon github"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
