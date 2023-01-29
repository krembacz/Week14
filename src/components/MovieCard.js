import './CardStyle.css';
import ReactPlayer from 'react-player';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import ReviewForm from './ReviewForm';


const MovieCard = (props) => {
    const movies = props.movies;

    return (
        <div>
            {movies.map((movie) => (
                <Container fluid className="movieCard" key={movie.title}>
                    <Row>
                        <img src={movie.poster} className="posterImg" alt="Official poster" />

                        <Col className="movieInfo">
                            <h2 className="movieTitle"> {movie.title} </h2>
                            <div className="muted">
                                <p><b>Alt Title:</b> {movie.alts} </p>
                                <p><b>Genre:</b> {movie.genre} </p>
                                <p><b>Director:</b> {movie.director}</p>
                                <p><b>{movie.year} </b> | <b>{movies.rating}</b> | <b>Length:</b> {movie.hour}h  {movie.min}m </p>
                            </div>
                        </Col>
                    </Row>

                    <div className="movieTrailer">
                        <Row className="movieTrailer">
                            <ReactPlayer
                                className="video"
                                controls
                                url={movie.url} />
                        </Row>
                    </div>

                    <Container fluid className="synopsis">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>SYNOPSIS</Accordion.Header>
                                <Accordion.Body>
                                    {movie.synopsis}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Container >

                    <ReviewForm />
                </Container>
            ))}
        </div>
    );
}

export default MovieCard;
