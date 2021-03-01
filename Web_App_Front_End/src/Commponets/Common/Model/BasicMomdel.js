import {Button, Modal} from "react-bootstrap"
import React from 'react'

function Example(props) {
    const rightClick = () => props.rightClick();
    const leftClick = () => props.leftClick();
  
    return (
      <>
        <Modal show={props.showStatus} onHide={leftClick} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>{props.modelTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
              {props.modelBody}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={leftClick}>
                {props.leftName}
            </Button>
            <Button variant="primary" onClick={rightClick}>
                {props.rightName}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 export default Example