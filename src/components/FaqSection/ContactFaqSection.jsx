import React, {useState} from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';

function Faq(props) {
    const [open, setOpen] = useState('0');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };

    return (
      <section className='faq'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-12 mb-5 mb-lg-0'>
              <h2 className='mb-4'>Questions you might have</h2>
              <Accordion open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId="1">Do you guarantee security and confidentiality of our intellectual property?</AccordionHeader>
                <AccordionBody accordionId="1">
                  <p>To provide guarantee security and confidentiality of customers intellectual property, we sign a non-disclosure agreement (NDA) between Truemark and customer as well as between Truemark and its employee.</p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="2">How long does the project take?</AccordionHeader>
                <AccordionBody accordionId="2">
                  <p>The duration of project depends on type of order, the technology chosen and the amount of work to be done.</p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="3">How you handle change request from your customer?</AccordionHeader>
                <AccordionBody accordionId="3">
                  <p>We have a standard procedure of handling change requests from our customers. Firstly, we seek their approval for any change request. After the customer approves the request, we do an impact analysis. This allows us to deliver the timelines and cost estimates to the customer. Once the customer approves the estimates, we implement the changes.</p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="4">Can we handle bigger project?</AccordionHeader>
                <AccordionBody accordionId="4">
                  <p>Yes we apply the tools, logic, and steps of project management to clarify your objectives detail the work and assign our highly qualified team to execute the project.</p>
                </AccordionBody>
              </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default Faq;
