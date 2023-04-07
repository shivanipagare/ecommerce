import React from 'react'
import './styles/Category.css';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import { useState } from 'react';

const Category = () =>{

 ////////////////////////FOR ADD NEW DATA////////////////////////////////


 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);


////////////////////////FOR  UPDATE DATA////////////////////////////////
const [showupdate, setShowUpdate] = useState(false);

const handleCloseUpdate = () => setShowUpdate(false);
const handleShowUpdate = () => setShowUpdate(true);


    return(
        <div>
           <h1 style={{ textAlign: "center", margin: "5px 20px",color:"#00308F" }}>Category</h1>
            <section className='user'>

                <Button variant="primary" className='add-button' style={{width:"200px", marginLeft:"50px"}} onClick={handleShow}>+Add New</Button>

<div className="usertable">
                <Table striped bordered hover size="sm" className='table' style={{alignItems:"center"}}>

                    <thead style={{ padding: "20px", backgroundColor:"#7CB9E8" }}>
                        <tr>
                            <th style={{ padding: "15px" }} >Category Id</th>
                            <th style={{ padding: "15px" }} >Category Name</th>
                            <th style={{ padding: "15px" }} >Add Date</th>
                            <th style={{ padding: "15px" }} >Action</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: "15px" }}>e01</td>
                            <td style={{ padding: "15px" }}>Shivani Pagare</td>
                            <td style={{ padding: "15px" }}>21-10-2022</td>
                            <td style={{ padding: "15px" }}>
                                <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>
                            
                        </tr>
                        <tr>
                            <td style={{ padding: "15px" }}>e02</td>
                            <td style={{ padding: "15px" }}>shreya singh</td>
                            <td style={{ padding: "15px" }}>21-10-2022</td>
                            <td style={{ padding: "15px" }}>
                                <Button variant="primary" onClick={handleShowUpdate} >Update</Button></td>
                         
                        </tr>
                        <tr>
                            <td style={{ padding: "15px" }}>e03</td>
                            <td style={{ padding: "15px" }} >Nidhi</td>
                            <td style={{ padding: "15px" }}>21-10-2022</td>
                            <td style={{ padding: "15px" }}>
                                <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>
                            

                        </tr>
                        <tr>
                            <td style={{ padding: "15px" }}>e01</td>
                            <td style={{ padding: "15px" }}>Shivani Pagare</td>
                            <td style={{ padding: "15px" }}>21-10-2022</td>
                            <td style={{ padding: "15px" }}>
                                <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>
                            
                        </tr>
                        <tr>
                            <td style={{ padding: "15px" }}>e01</td>
                            <td style={{ padding: "15px" }}>Shiva</td>
                            <td style={{ padding: "15px" }}>21-10-2022</td>
                            <td style={{ padding: "15px" }}>
                                <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>
                           
                        </tr>
                    </tbody>
                </Table>
                </div>
            </section>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Category Id:</Form.Label><br />
                        <Form.Control type="text" /><br />
                        <Form.Label>Category name:</Form.Label><br />
                        <Form.Control type="text" /><br />
                       
                    </Form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save 
                    </Button>
                </Modal.Footer>
            </Modal>



            <Modal show={showupdate} onHide={handleCloseUpdate}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Category Id:</Form.Label><br />
                        <Form.Control type="text" /><br />
                        <Form.Label>Category name:</Form.Label><br />
                        <Form.Control type="text" /><br />
                       
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseUpdate}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseUpdate}>
                       Update changes
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
    )
}
export default Category;