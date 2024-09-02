import React from 'react'
import Header from '../../Components/Header/Header'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Detailpage() {
  const { id } = useParams();
  const [data, setData] = useState();
  const getApi = async () => {
    const fetchApi = await axios.get('https://dummyjson.com/recipes')
    // console.log(fetchApi.data.recipes[0].instructions)
    setData(fetchApi.data.recipes)
  }
  useEffect(() => {
    getApi()
  }, [])
  return (
    <>
      <Header />
      {
        data?.map(({instructions},index)=>{
          return (
            <>
            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>

            </Card.Text>
          </Card.Body>
          {instructions?.map((value,index)=>{
            return (
              <>
            <ListGroup className="list-group-flush">
            <ListGroup.Item>
              {instructions[value]}
            </ListGroup.Item>
          </ListGroup>
              </>
            )
          })}
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
            </>
          )
        })
      }
        
    </>

  )
}

export default Detailpage