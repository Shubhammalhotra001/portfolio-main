import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg";
import SmartSnip from "../../assets/SmartSnip.png";
import TileFusion from "../../assets/TileFusion.png";
import Product_Safety_Analyzer from "../../assets/Product_Safety_Analyzer.png";

import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {/* SmartSnip */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a
                href="https://github.com/Shubhammalhotra001/SmartSnip"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b "
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <title>Code</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </a>
              <div className="project-links">
                <a
                  href="https://smart-snip.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  title="Demo"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="project-image">
              <img
                src={SmartSnip}
                alt="SmartSnip Project"
                width="100%"
                height="220px"
              />
            </div>
            <div className="body">
              <h3>SmartSnip – AI-Powered Bookmark Manager</h3>
              <p>
                SmartSnip is a modern React-based web application for saving, tagging, and summarizing web links using AI. 
                It features a sleek dark interface, glowing highlights, and smooth Framer Motion animations over an interactive tsParticles background. 
                Includes user authentication, a dashboard for managing bookmarks, and AI-generated summaries — all styled with Tailwind CSS and elegant glassmorphism effects.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>JWT</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Product Safety Analyzer */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a
                href="https://github.com/Shubhammalhotra001/Product-Analyser"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b "
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <title>Code</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </a>

              <div className="project-links">
                <a
                  href="https://product-safety-analyser.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  title="Demo"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="project-image">
              <img src={Product_Safety_Analyzer} alt="product saftety Analyzer Project" width="100%" height="220px" />
            </div>
            <div className="body">
              <h3>Product Safety Analyzer – Ingredient Risk Detection App</h3>
              <p>
                Product Safety Analyzer is a cloud-based web application that detects and evaluates product ingredients from uploaded images. 
                It combines AWS Rekognition for OCR-based extraction, MongoDB for ingredient data management, and Chart.js for visualizing risk levels. 
                The platform also integrates AWS Bedrock to power an AI chatbot that provides instant insights and safety guidance on detected ingredients.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Javascript</li>
                <li>AWS S3</li>
                <li>AWS Rekognition</li>
                <li>MongoDB</li>
                <li>Chart.js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* TileFusion */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a
                href="https://github.com/Shubhammalhotra001/TileFusion"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b "
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <title>Code</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </a>
              <div className="project-links">
                <a
                  href="https://tile-fusion-jet.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  title="Demo"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="project-image1">
              <img src={TileFusion} alt="TileFusion Project" width="100%" height="220px" />
            </div>
            <div className="body">
              <h3>TileFusion – 2048 Puzzle Game</h3>
              <p>
                A modern React-based 2048 game with a sleek dark interface, glowing gradient tiles, and smooth Framer Motion animations.
                Designed with ⚡ Tailwind CSS, it features an interactive particle background, glassmorphism effects, and a fully responsive layout 
                merge tiles to reach 2048 and win.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Framer Motion</li>
                <li>Tailwind CSS</li>
                <li>JavaScript (ES6+)</li>
                <li>Glassmorphism</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        
      </div>
    </Container>
  );
}