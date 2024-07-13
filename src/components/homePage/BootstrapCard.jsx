import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BootstrapCard = ({title, imgUrl, description, price})  => { 
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" 
      src={imgUrl}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
          <Card.Title>{price}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Button variant="warning">Add to Cart</Button>
      </Card.Body>
    </Card>

    
  )
}

export default BootstrapCard