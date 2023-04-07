import React from 'react'
import './styles/User.css';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import { useState } from 'react';

function User() {


    ////////////////////////FOR ADD NEW DATA////////////////////////////////


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


////////////////////////FOR  UPDATE DATA////////////////////////////////
const [showupdate, setShowUpdate] = useState(false);

const handleCloseUpdate = () => setShowUpdate(false);
const handleShowUpdate = () => setShowUpdate(true);

    return (
        <div>
            <h1 style={{ textAlign: "center", margin: "5px 20px" }}>User Data</h1>
            <section className='user'>

                <Button variant="primary" className='add-button' style={{width:"200px", marginLeft:"50px"}} onClick={handleShow}>+Add New</Button>

<div className="usertable">
                <Table striped bordered hover className='table' >

                    <thead style={{ padding: "20px",backgroundColor: "#7CB9E8"  }}>
                        <tr>
                            <th style={{ padding: "15px" }} >UserId</th>
                            <th style={{ padding: "15px" }} >User Name</th>
                            <th style={{ padding: "15px" }} >State</th>
                            <th style={{ padding: "15px" }} >Action</th>
                            <th style={{ padding: "15px" }} >Role</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >e01</td>
                            <td >Shivani Pagare</td>
                            <td ><Form> <Form.Check
                                type="switch"
                                id="custom-switch"

                            /></Form></td>
                            <td>
                                <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>
                            <td>HR</td>
                        </tr>
                        <tr>
                            <td >e02</td>
                            <td>shreya singh</td>
                            <td><Form> <Form.Check
                                type="switch"
                                id="custom-switch" /></Form></td>
                            <td>
                                <Button variant="primary" onClick={handleShowUpdate} >Update</Button></td>
                            <td>HR</td>
                        </tr>
                        <tr>
                            <td>e03</td>
                            <td >Nidhi</td>
                            <td><Form> <Form.Check
                                type="switch"
                                id="custom-switch" /></Form></td>
                            <td>
                                <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>
                            <td>HR</td>

                        </tr>
                        <tr>
                            <td>e01</td>
                            <td>Shivani Pagare</td>
                            <td><Form> <Form.Check
                                type="switch"
                                id="custom-switch"

                            /></Form></td>
                            <td>
                                <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>
                            <td>HR</td>
                        </tr>
                        <tr>
                            <td>e01</td>
                            <td>Shiva</td>
                            <td><Form> <Form.Check
                                type="switch"
                                id="custom-switch"

                            /></Form></td>
                            <td>
                                <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>
                            <td style={{ padding: "15px" }}>HR</td>
                        </tr>
                        <tr>
                            <td>e01</td>
                            <td>Shiva</td>
                            <td><Form> <Form.Check
                                type="switch"
                                id="custom-switch"

                            /></Form></td>
                            <td>
                                <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>
                            <td>HR</td>
                        </tr>
                     
                    </tbody>
                </Table>
                </div>
            </section>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>UserId:</Form.Label><br />
                        <Form.Control type="text" /><br />
                        <Form.Label>User name:</Form.Label><br />
                        <Form.Control type="text" /><br />
                        <Form.Label>Role:</Form.Label><br />
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
                    <Modal.Title>Update Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>UserId:</Form.Label><br />
                        <Form.Control type="text" /><br />
                        <Form.Label>User name:</Form.Label><br />
                        <Form.Control type="text" /><br />
                        <Form.Label>Role:</Form.Label><br />
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
export default User;