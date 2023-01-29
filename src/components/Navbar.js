import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarStyle.css';

function NavScroll() {
    return (
        <div id="navbarContainer">
        <Navbar className="sticky" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">flix</Navbar.Brand>

                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="search title, director, or  genre"
                        aria-label="Search"
                    />
                    <Button className="btn btn-dark" id="searchBtn">Search</Button>
                </Form>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <NavDropdown title="Movies" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action1">
                                Critically Acclaimed
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action2">
                                Browse by Genre
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action3">
                                Box Office Hits
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Release Calendar
                            </NavDropdown.Item>
                        </NavDropdown>


                        <NavDropdown title="TV Shows" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action5">
                                Fan Favorites
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action6">
                                Browse by Genre
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action7">
                                Currently Running Series
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action8">
                                Streaming Avaibility
                            </NavDropdown.Item>
                        </NavDropdown>


                        <NavDropdown title="News & Events" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action9">
                                All Events
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action10">
                                Oscars
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action11">
                                Emmy's
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action12">
                                Best Motion Pictures
                            </NavDropdown.Item>


                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action13">
                                Film Festivals
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Community" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action14">Contact Us</NavDropdown.Item>

                            <NavDropdown.Item href="#action15">
                                Contributing
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action16">
                                About Us
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action17">
                                FAQ
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#home"><Button id="signIn">Sign In</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
}

export default NavScroll;