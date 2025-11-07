
import React, { useState, useEffect } from 'react';
import { Container, Card, Spinner, Alert } from 'react-bootstrap';

export default function UserDataFetcher() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3005/beverages/"); // Example API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array ensures this runs once on mount

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">Error: {error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>User Details</Card.Header>
        <Card.Body>
          {userData && (
            <>
              <Card.Title>{userData.name}</Card.Title>
              <Card.Text>
                <strong>Username:</strong> {userData.username} <br />
                <strong>Email:</strong> {userData.email} <br />
                <strong>Phone:</strong> {userData.phone} <br />
                <strong>Website:</strong> {userData.website}
              </Card.Text>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

