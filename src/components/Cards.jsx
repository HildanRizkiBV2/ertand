import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image1 from '../assets/image/Hoodie.png';

function Cards() {
  return (
    <div className='d-flex justify-content-center'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image1} />
      <Card.Body>
        <Card.Title>First art</Card.Title>
        <Card.Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, sequi, quos, ea inventore aspernatur omnis iste obcaecati facere magni ipsum ducimus expedita minus. Voluptate dolores obcaecati inventore quibusdam aspernatur pariatur.
        </Card.Text>
        <Button variant="primary" onClick={() => window.location.href = '/product'}> Go product</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cards;