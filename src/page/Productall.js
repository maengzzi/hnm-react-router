import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const Productall = () => {
  const[productList,setProductList]=useState([]);
  const[query,setQuery]=useSearchParams();

  const getProducts=async()=>{
    let searchQuery=query.get('q')||"";
    console.log("쿼리값은",searchQuery);
    let url=`https://my-json-server.typicode.com/maengzzi/hnm-react-router/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }

  useEffect(()=>{
    getProducts();
  },[query])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu,index)=><Col key={index} lg={3}><ProductCard item={menu}/></Col>)}
        </Row>
      </Container>
    </div>
  )
}

export default Productall
