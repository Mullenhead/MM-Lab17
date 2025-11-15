import Accordion from 'react-bootstrap/Accordion';

export default function BasicAccordion() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>We use only the best meats </Accordion.Header>
        <Accordion.Body>
         <h4>Best Meats for Sandwiches</h4>
          We believe quality starts at the source, which is why we use only 
          premium, top-grade meats in every sandwich we make. From slow-roasted turkey 
          to rich, savory roast beef and artisan-cured specialties, we hand-select cuts 
          that are juicy, tender, and full of bold, natural flavor. Every bite delivers 
          freshness, craftsmanship, and the kind of taste that sets our sandwiches apart.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Everything is made fresh by MaMa Louisa</Accordion.Header>
        <Accordion.Body>
          At MaMa Louisa’s, every dish begins with the same simple promise: fresh ingredients, 
          prepared with care. From slow-roasted meats to hand-chopped toppings and sauces 
          crafted in-house, everything is made the way MaMa Louisa herself would make 
          it—thoughtfully, honestly, and always fresh. Because here, good food isn’t 
          just served… it’s made with heart.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

