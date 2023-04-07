import React from 'react';
import './styles/Roles.css';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
function Roles() {



    const [data, setData] = useState([])

    const getData = async() =>{
        const api = await axios.get("http://ecom.tnplab.in:3999/admin/getRoles")
        setData(api.data)
        console.log(api,'apidata')
    }
    console.log(data,'data')
    useEffect(()=>{
        getData()
    },[])
    ////////////////////////FOR  UPDATE DATA////////////////////////////////
    const [showupdate, setShowUpdate] = useState(false);

    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);

    return (
        <div style={{ marginLeft: "40px", marginRight: "40px", justifyContent: "center" }}>
            <h1 style={{ textAlign: "center", margin: "5px 20px",color:"#00308F" }}>Roles</h1>
            <section className='roles'>


                <Form className='add-new'>
                    <h3 className='heading'>Add New Roles</h3><hr />
                    <Form.Label>RoleId:</Form.Label><br />
                    <Form.Control type="text" /><br />
                    <Form.Label>Role name:</Form.Label><br />
                    <Form.Control type="text" /><br />
                    <Button variant="primary">
                        Save
                    </Button>

                </Form>

                <div className='rolestable'  >
                    <Table striped bordered hover  className='table' style={{ alignItems: "center", width: "80%" }}>

                        <thead style={{  backgroundColor: "#7CB9E8" }}>
                            <tr style={{width:"500px"}}>
                                <th style={{ padding: "15px" }} >Role Id</th>
                                <th style={{ padding: "15px" }} >Role Name</th>

                                <th style={{ padding: "15px" }} >Action</th>


                            </tr>
                        </thead>
                        
                        <tbody>

                            {data && data.map((item, index)=> {
                                return(
                            <tr key={index} style={{width:"500px"}}>
                                <td style={{ padding: "15px" }}>{item.role_id}</td>
                                <td style={{ padding: "15px" }}>{item.role_name}</td>

                                <td style={{ padding: "15px" }}>
                                    <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>

                            </tr>
                                )
                            }  )}


                            {/* <tr style={{width:"500px"}}>
                                <td style={{ padding: "15px" }}>e02</td>
                                <td style={{ padding: "15px" }}>shreya singh</td>

                                <td style={{ padding: "15px" }}>
                                    <Button variant="primary" onClick={handleShowUpdate} >Update</Button></td>

                            </tr>
                            <tr style={{width:"500px"}}>
                                <td style={{ padding: "15px" }}>e03</td>
                                <td style={{ padding: "15px" }} >Nidhi</td>

                                <td style={{ padding: "15px" }}>
                                    <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>


                            </tr>
                            <tr style={{width:"500px"}}>
                                <td style={{ padding: "15px" }}>e01</td>
                                <td style={{ padding: "15px" }}>Shivani Pagare</td>

                                <td style={{ padding: "15px" }}>
                                    <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>

                            </tr>
                            <tr style={{width:"500px"}}>
                                <td style={{ padding: "15px" }}>e01</td>
                                <td style={{ padding: "15px" }}>Shiva</td>

                                <td style={{ padding: "15px" }}>
                                    <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>

                            </tr> */}
                        </tbody>
                    </Table>
                </div>
            </section>
            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>RoleId:</Form.Label><br />
                        <Form.Control type="text" /><br />
                        <Form.Label>Role name:</Form.Label><br />
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
            </Modal> */}


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

export default Roles;