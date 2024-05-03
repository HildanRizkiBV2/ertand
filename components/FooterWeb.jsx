
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


const FooterWeb = () => {
  return(
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
        <span>Social Media</span>
      </div>

      <div>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="facebook-f" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="twitter" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="google" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="instagram" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="linkedin" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="github" />
        </a>
      </div>
    </section>

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon icon="gem" className="me-3" />
              Ertand.
            </h6>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea maxime nemo illum voluptate veniam possimus repellat rem quis, neque ad nulla minus ullam, velit quasi incidunt, quae architecto reprehenderit! Nam.
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
            <p>
              <a href='#!' className='text-reset'>
                Hoodie
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                
              </a>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p>
              <a href='#!' className='text-reset'>
                
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                
              </a>
            </p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <MDBIcon icon="home" className="me-2" />
              Central Java
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              info@example.com
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" /> + 08
            </p>
            <p>
              <MDBIcon icon="print" className="me-3" /> + 08
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2024 Copyright:
      <a className='text-reset fw-bold' href='https://ertand.co.id/'>
        ertand.co.id
      </a>
    </div>
  </MDBFooter>
    )
}

export default FooterWeb