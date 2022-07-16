import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

export default function AddNewModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Modal
      onClose={() => {
        // setIsShow(false);
        onClose
      }}
      isOpen={true}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
            //   setIsShow(false);
                onClose
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
