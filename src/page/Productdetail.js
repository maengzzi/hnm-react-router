import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import {Row,Col} from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button'

const Productdetail = () => {
  const[product,setProduct] = useState(null);
  let{id} = useParams();
  const getProductDetail=async()=>{
    let url = `https://my-json-server.typicode.com/maengzzi/hnm-react-router/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }

  useEffect(()=>{
    getProductDetail();
  },[])

  return (
    <Container>
      <Row>
        <Col className='product-detail-img'>
          <img src={product?.img}/>
        </Col>
        <Col>
          <div className="product-info">{product?.title}</div>
          <div className="product-info">₩{product?.price}</div>
          <div className="choice">{product?.choice==true?"Conscious choice":""}</div>
          <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.map((item) => (
                    <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark" className="add-button">
              추가
            </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Productdetail
