import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Card>
        <CardBody>
          <CardTitle>Welcome to the ultimate fan site!</CardTitle>
          <CardImg top width="100%" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick" />
          <Link to={`/characters`}><Button>Click to see a character list!</Button></Link>
          {/* <Link to={`/search`}><Button>Click to search for a character!</Button></Link> */}
        </CardBody>
      </Card>
    </section>
  );
}
