import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SyntheticEvent, useState } from 'react';
import './NavBar.css';

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
    setPillWidth(event.currentTarget.getBoundingClientRect().width);
    setPillHeight(event.currentTarget.getBoundingClientRect().height);
    setPillOffset(event.currentTarget.getBoundingClientRect().left);
    setVisibility('visible');
  }

  return (
    <>
      <Navbar className="rounded-pill" fixed="top" bg="bg-transparent">
        <Nav className="" variant="pills">
          <Nav.Link className="rounded-pill" onClick={MoveActiveTab}>
            About Me
          </Nav.Link>
          <Nav.Link className="rounded-pill" onClick={MoveActiveTab}>
            Experiences
          </Nav.Link>
          <Nav.Link className="rounded-pill" onClick={MoveActiveTab}>
            Projects
          </Nav.Link>
          <Nav.Link className="rounded-pill" onClick={MoveActiveTab}>
            Miscellaneous
          </Nav.Link>
          <Nav.Link
            className="rounded-pill active-pill"
            style={activePillStyle}
          ></Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavBar;
