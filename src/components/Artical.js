import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style= {{ width: '15rem' , height:''  }}>
       <div style={{ display:'flex' }}>
        {/* Content of the first flex item */}
      </div>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;