import React from 'react'
import './styles/Subcategory.css';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import { useState } from 'react';
function Subcategory() {
    const [showupdate, setShowUpdate] = useState(false);

    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);
    return (
        <div>

            <div style={{ marginLeft: "40px", marginRight: "40px", justifyContent: "center" }}>
                <h1 style={{ textAlign: "center", margin: "5px 20px", color: "#00308F" }}>SubCategory</h1>
                <section className='subcategory'>


                    <Form className='add-new'>
                        <Form.Label for="category" >Category:</Form.Label>
                        <select id="category" name="category" style={{width:"100%"}}>
                            <option value="Electronics">Electronics</option>
                            <option value="cloth">Cloth</option>
                            <option value="grocery">Grocery</option>
                            <option value="kitchen">Kitchen</option>
                            <option value="kids">Kids</option>
                        </select>
                        <br />
                        <hr/>
                        <Form.Label>SubCategoryId:</Form.Label><br />
                        <Form.Control type="text" /><br />
                        <Form.Label>SubCategory name:</Form.Label><br />
                        <Form.Control type="text" /><br />
                        <Button variant="primary">
                            Save
                        </Button>

                    </Form>

                    <div className='sub-table'  >
                        <Table striped bordered hover className='table' style={{ alignItems: "center" }}>

                            <thead style={{ backgroundColor: "#7CB9E8" }}>
                                <tr style={{ width: "500px" }}>
                                    <th style={{ padding: "15px" }} >Main Category</th>
                                    <th style={{ padding: "15px" }} >Sub Category Id</th>
                                    <th style={{ padding: "15px" }} >Sub-Category Name</th>
                                    <th style={{ padding: "15px" }} >Added On</th>
                                    <th style={{ padding: "15px" }} >Action</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ width: "500px" }}>
                                    <td style={{ padding: "15px" }}>Electronics</td>
                                    <td style={{ padding: "15px" }}>e02</td>
                                    <td style={{ padding: "15px" }}>mobile</td>
                                    <td style={{ padding: "15px" }}>02-03-2023</td>
                                    <td style={{ padding: "15px" }}>
                                        <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>

                                </tr>
                                <tr style={{ width: "500px" }}>
                                    <td style={{ padding: "15px" }}>cloth</td>
                                    <td style={{ padding: "15px" }}>e04</td>
                                    <td style={{ padding: "15px" }}>jeans</td>
                                    <td style={{ padding: "15px" }}>12-03-2023</td>
                                    <td style={{ padding: "15px" }}>
                                        <Button variant="primary" onClick={handleShowUpdate} >Update</Button></td>

                                </tr>
                                <tr style={{ width: "500px" }}>
                                    <td style={{ padding: "15px" }}>grocery</td>
                                    <td style={{ padding: "15px" }} >e06</td>
                                    <td style={{ padding: "15px" }}>flowers</td>
                                    <td style={{ padding: "15px" }}>02-03-2023</td>
                                    <td style={{ padding: "15px" }}>
                                        <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>


                                </tr>
                                <tr style={{ width: "500px" }}>
                                    <td style={{ padding: "15px" }}>Kitchen</td>
                                    <td style={{ padding: "15px" }}>e08</td>
                                    <td style={{ padding: "15px" }}>apron</td>
                                    <td style={{ padding: "15px" }}>09-03-2023</td>
                                    <td style={{ padding: "15px" }}>
                                        <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>

                                </tr>
                                <tr style={{ width: "500px" }}>
                                    <td style={{ padding: "15px" }}>Kids</td>
                                    <td style={{ padding: "15px" }}>e10</td>
                                    <td style={{ padding: "15px" }}>Toys</td>
                                    <td style={{ padding: "15px" }}>05-03-2023</td>
                                    <td style={{ padding: "15px" }}>
                                        <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>

                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </section>



                <Modal show={showupdate} onHide={handleCloseUpdate}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update SubCategory</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Label>SubCategory Id:</Form.Label><br />
                            <Form.Control type="text" /><br />
                            <Form.Label>SubCategory name:</Form.Label><br />
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
        </div>
    )
}
export default Subcategory;