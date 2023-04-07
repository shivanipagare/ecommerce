import React from 'react'
//import { Table, Button, Form, Modal } from 'react-bootstrap';
import { MDBDataTable } from 'mdbreact';
//import { useState } from 'react';
//import { Button } from 'react-bootstrap';
const Customer = () => {

//     const [showupdate, setShowUpdate] = useState(false);

// const handleCloseUpdate = () => setShowUpdate(false);
// const handleShowUpdate = () => setShowUpdate(true);


    const data = {
      columns: [
        {
          label: 'Customer Id',
          field: 'id',
         
          width: 150
        },
        {
          label: 'customer Name',
          field: 'cname',
         
          width: 270
        },
        {
          label: 'Mobile',
          field: 'mobile',
        
          width: 200
        },
        {
          label: 'City',
          field: 'city',
          
          width: 100
        },
        {
          label: 'Action',
          field: 'action',
         
          width: 150
        },
        {
          label: 'Status',
          field: 'status',
        
          width: 100
        }
      ],
      rows: [
        {
          id: "e01",
         cname: 'shivani pagare',
          mobile: 123456,
          city:"Bhopal",
          action:"",
          status: '$320'
        },
        {
            id: "e02",
            cname: 'sakshi pagare',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e03",
            cname: 'gourav pagare',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e04",
            cname: 'shreya singh',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e05",
            cname: 'vansh',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e01",
            cname: 'harshit',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e05",
            cname: 'abhi ',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e06",
            cname: 'shivani pagare',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e01",
            cname: 'shivani pagare',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e01",
            cname: 'shivani pagare',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e01",
            cname: 'shivani pagare',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e01",
            cname: 'shivani pagare',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e01",
            cname: 'shivani pagare',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        }
      ]
    }
    return (
<div className=' container h-auto'>

<MDBDataTable
striped
bordered
small
data={data}
/>

</div>

        // <div>

            
        //  <div className="usertable">
        //         <Table striped bordered hover className='table' >

        //             <thead style={{ padding: "20px",backgroundColor: "#7CB9E8"  }}>
        //                 <tr>
        //                     <th style={{ padding: "15px" }} >UserId</th>
        //                     <th style={{ padding: "15px" }} >User Name</th>
        //                     <th style={{ padding: "15px" }} >State</th>
        //                     <th style={{ padding: "15px" }} >Action</th>
        //                     <th style={{ padding: "15px" }} >Role</th>

        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 <tr>
        //                     <td style={{ padding: "15px" }}>e01</td>
        //                     <td style={{ padding: "15px" }}>Shivani Pagare</td>
        //                     <td style={{ padding: "15px" }}><Form> <Form.Check
        //                         type="switch"
        //                         id="custom-switch"

        //                     /></Form></td>
        //                     <td style={{ padding: "15px" }}>
        //                         <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>
        //                     <td style={{ padding: "15px" }}>HR</td>
        //                 </tr>
        //                 <tr>
        //                     <td style={{ padding: "15px" }}>e02</td>
        //                     <td style={{ padding: "15px" }}>shreya singh</td>
        //                     <td style={{ padding: "15px" }}><Form> <Form.Check
        //                         type="switch"
        //                         id="custom-switch" /></Form></td>
        //                     <td style={{ padding: "15px" }}>
        //                         <Button variant="primary" onClick={handleShowUpdate} >Update</Button></td>
        //                     <td style={{ padding: "15px" }}>HR</td>
        //                 </tr>
        //                 <tr>
        //                     <td style={{ padding: "15px" }}>e03</td>
        //                     <td style={{ padding: "15px" }} >Nidhi</td>
        //                     <td style={{ padding: "15px" }}><Form> <Form.Check
        //                         type="switch"
        //                         id="custom-switch" /></Form></td>
        //                     <td style={{ padding: "15px" }}>
        //                         <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>
        //                     <td style={{ padding: "15px" }}>HR</td>

        //                 </tr>
        //                 <tr>
        //                     <td style={{ padding: "15px" }}>e01</td>
        //                     <td style={{ padding: "15px" }}>Shivani Pagare</td>
        //                     <td style={{ padding: "15px" }}><Form> <Form.Check
        //                         type="switch"
        //                         id="custom-switch"

        //                     /></Form></td>
        //                     <td style={{ padding: "15px" }}>
        //                         <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>
        //                     <td style={{ padding: "15px" }}>HR</td>
        //                 </tr>
        //                 <tr>
        //                     <td style={{ padding: "15px" }}>e01</td>
        //                     <td style={{ padding: "15px" }}>Shiva</td>
        //                     <td style={{ padding: "15px" }}><Form> <Form.Check
        //                         type="switch"
        //                         id="custom-switch"

        //                     /></Form></td>
        //                     <td style={{ padding: "15px" }}>
        //                         <Button variant="primary" onClick={handleShowUpdate}>Update</Button></td>
        //                     <td style={{ padding: "15px" }}>HR</td>
        //                 </tr>
        //             </tbody>
        //         </Table>
        //         </div>

        //         <Modal show={showupdate} onHide={handleCloseUpdate}>
        //         <Modal.Header closeButton>
        //             <Modal.Title>Update Data</Modal.Title>
        //         </Modal.Header>
        //         <Modal.Body>
        //             <Form>
        //                 <Form.Label>UserId:</Form.Label><br />
        //                 <Form.Control type="text" /><br />
        //                 <Form.Label>User name:</Form.Label><br />
        //                 <Form.Control type="text" /><br />
        //                 <Form.Label>Role:</Form.Label><br />
        //                 <Form.Control type="text" /><br />
        //             </Form>
        //         </Modal.Body>
        //         <Modal.Footer>
        //             <Button variant="secondary" onClick={handleCloseUpdate}>
        //                 Close
        //             </Button>
        //             <Button variant="primary" onClick={handleCloseUpdate}>
        //                Update changes
        //             </Button>
        //         </Modal.Footer>
        //     </Modal>
        // </div>

    )
}
export default Customer;