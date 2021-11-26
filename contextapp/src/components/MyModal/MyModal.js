import { Modal } from "antd";

const MyModal = ({ showModal, setShowModal }) => {
  return (
    <Modal
      title="Basic Modal"
      visible={showModal}
      // onOk={handleOk}
      onCancel={() => setShowModal(false)}
    >
      Arghun
    </Modal>
  );
};

export default MyModal;
