import { Dialog, Portal } from "@chakra-ui/react";
import Loader from "../CustomLoaders/Loaders";

interface LoadingProps {
  text: string;
}

const Loading = ({ text }: LoadingProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="basis-[65%] flex justify-center items-center pt-[20px] mb-5">
        <Loader />
      </div>
      <p className="text-center font-medium comm-m-14">{text}</p>
    </div>
  );
};

interface LoadingModalProps {
  isOpen: boolean;
  onClose: () => void;
  text: string;
}

const LoadingModal = ({ isOpen, onClose, text }: LoadingModalProps) => {
  return (
    <Dialog.Root
      size={"sm"}
      open={isOpen}
      onOpenChange={onClose}
      closeOnInteractOutside={false}
      placement={"center"}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content bg="#FAFAFA" px={"20px"} py={"30px"}>
            <Dialog.Body>
              <Loading text={text} />
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default LoadingModal;
