import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SyntheticEvent, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './NavBar.css';
import About from '../About/About';
import Experiences from '../Experiences/Experiences';
import Projects from '../Projects/Projects';
import Miscellaneous from '../Miscellaneous/Miscellaneous';

function NavBar() {
  const [pillWidth, setPillWidth] = useState(0);
  const [pillHeight, setPillHeight] = useState(0);
  const [pillOffset, setPillOffset] = useState<string | number>('50%');
  const [visibility, setVisibility] = useState('hidden');

  const activePillStyle = {
    width: pillWidth + 'px',
    height: pillHeight + 'px',
    backgroundColor: 'plum',
    position: 'fixed',
    left: pillOffset,
    transition: 'width 0.3s, height 0.3s, left 0.3s',
    zIndex: -1,
    visibility: visibility,
  } as React.CSSProperties;

  function MoveActiveTab(event: SyntheticEvent) {
    // Set the active pill smaller rather than take the whole tab width if not on mobile
    const multiplier = window.innerWidth > 700 ? 0.7 : 1.0;
    const clickedWidth = event.currentTarget.getBoundingClientRect().width;
    const clickedHeight = event.currentTarget.getBoundingClientRect().height;
    const clickedLeft = event.currentTarget.getBoundingClientRect().left;
    const subtracted = clickedWidth * (1.0 - multiplier);
    setPillWidth(clickedWidth * multiplier);
    setPillHeight(clickedHeight);
    setPillOffset(clickedLeft + subtracted / 2.0);
    setVisibility('visible');
  }

  return (
    <>
      <BrowserRouter>
        <Navbar className="rounded-pill" fixed="top" bg="bg-transparent">
          <Nav className="" variant="pills">
            <Nav.Link
              as={Link}
              to={'/react-website/about/'}
              className="rounded-pill"
              onClick={MoveActiveTab}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={'/react-website/experiences/'}
              className="rounded-pill"
              onClick={MoveActiveTab}
            >
              Experiences
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={'/react-website/projects/'}
              className="rounded-pill"
              onClick={MoveActiveTab}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={'/react-website/miscellaneous/'}
              className="rounded-pill"
              onClick={MoveActiveTab}
            >
              Miscellaneous
            </Nav.Link>
            <Nav.Link
              className="rounded-pill"
              style={activePillStyle}
            ></Nav.Link>
          </Nav>
        </Navbar>
        <Routes>
          <Route path="/react-website/about" element={<About />} />
          <Route path="/react-website/experiences" element={<Experiences />} />
          <Route path="/react-website/projects" element={<Projects />} />
          <Route
            path="/react-website/miscellaneous"
            element={<Miscellaneous />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default NavBar;
