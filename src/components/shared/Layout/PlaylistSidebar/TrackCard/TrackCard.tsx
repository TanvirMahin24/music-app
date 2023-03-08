import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const TrackCard = ({ data }: any) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Row>
            <Col md={4}>
              <img src={data.images.background} className="w-100" />
            </Col>
            <Col md={8}>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.subtitle}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TrackCard;
