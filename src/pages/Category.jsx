import React from 'react'
import './styles/Category.css';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Category = () => {

    //Get data
    const [categoryData, setCategoryData] = useState([])

    ////////////////////////FOR ADD NEW DATA////////////////////////////////
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    ////////////////////////FOR  UPDATE DATA////////////////////////////////
    const [showupdate, setShowUpdate] = useState(false);

    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);



    //get data
    const getCategory = async () => {
        let categoryapi = await axios.get('http://localhost:5500/product')
        setCategoryData(categoryapi.data.response)

       // console.log(categoryapi.data.response)
    }


    useEffect(() => {
        getCategory()
    }, [])


    //add new(post data)
    const [category_id, setCategoryId] = useState('')
    const [category_name, setCategoryName] = useState('')
    const [category_image, setCategoryImage] = useState('')
    const [gst, setGst] = useState('')

    const handleImage = (e) => {
        setCategoryImage(e.target.files[0])
    }

    const submitData = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('category_id', category_id);
        formData.append('category_name', category_name);
        formData.append('category_image', category_image);
        formData.append('gst', gst);

        const configs = {
            "content-Type": "multiple/form-data"
        }
        const apiData = await axios.post("http://localhost:5500/product", formData, configs)
       // console.log(apiData, 'apidata')
        setCategoryId('')
        setCategoryName('')
        setCategoryImage('')
        setGst('')
        handleClose()
        getCategory()
    }

    return (
        <div>
            <h1 style={{ textAlign: "center", margin: "5px 20px", color: "#00308F" }}>Category</h1>
            <section className='user'>

                <Button variant="primary" className='add-button' style={{ width: "200px", marginLeft: "50px" }} onClick={handleShow}>+Add New</Button>

                <div className="usertable">
                    <Table striped bordered hover size="sm" className='table' style={{ alignItems: "center" }}>

                        <thead style={{ padding: "20px", backgroundColor: "#7CB9E8" }}>
                            <tr>
                                <th style={{ padding: "15px" }} >Category Id</th>
                                <th style={{ padding: "15px" }} >Category Name</th>
                                <th style={{ padding: "15px" }} >category image</th>
                                <th style={{ padding: "15px" }} >GST</th>
                                <th style={{ padding: "15px" }} >Action</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                categoryData && categoryData.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td style={{ padding: "15px" }}>{item.category_id}</td>
                                            <td style={{ padding: "15px" }}>{item.category_name}</td>
                                            <td style={{ padding: "15px" }}><img src={`http://localhost:5500/${item.category_image}`} style={{ width: "50px", height: "50px" }} /></td>
                                            <td style={{ padding: "15px" }}>{item.gst}</td>
                                            <td style={{ padding: "15px" }}>
                                                <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>

                                        </tr>
                                    )
                                }
                                )
                            }
                        </tbody>
                    </Table>
                </div>
            </section>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Category Id:</Form.Label><br />
                        <Form.Control type="text" value={category_id} onChange={(e) => setCategoryId(e.target.value)} /><br />
                        <Form.Label>Category name:</Form.Label><br />
                        <Form.Control type="text" value={category_name} onChange={(e) => setCategoryName(e.target.value)} /><br />
                        <Form.Label>Category image:</Form.Label><br />
                        <Form.Control type="file" onChange={handleImage} /><br />
                        <Form.Label>GST:</Form.Label><br />
                        <Form.Control type="text" value={gst} onChange={(e) => setGst(e.target.value)} /><br />
                    </Form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={submitData}>
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