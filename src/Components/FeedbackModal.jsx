import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function FeedbackModal() {
    const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <>
    <Button borderRadius="10px" h="45px" w="156px" fontSize="30px" bg="#A6C7F8" my={30} as="b" onClick={() => onOpen()}>Submit</Button>
    <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Text>
                Your Feedback has been Recorded
            </Text>
          </ModalBody>
          <ModalFooter>
            <Link to="/feedback"><Button onClick={onClose}>Ok</Button></Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default FeedbackModal