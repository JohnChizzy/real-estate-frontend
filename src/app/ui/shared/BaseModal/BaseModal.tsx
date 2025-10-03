import { ReactNode } from 'react';
import {
  Dialog,
  Heading,
  Box,
  Portal
} from '@chakra-ui/react';
import { BsXCircle } from 'react-icons/bs';

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subTitle?: string | ReactNode;
  children: ReactNode;
  footerChildren?: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'cover';
  closeOnInteractOutside?: boolean;
  noHeader?: boolean;
  noFooter?: boolean;
  autoFocus?: boolean;
  bg?: string;
  p?: string;
  headerBorderBottom?: boolean;
  footerBorderTop?: boolean;
  contentMaxWidth?: string;
}

function BaseModal({
  isOpen,
  onClose,
  title,
  subTitle,
  children,
  footerChildren,
  size,
  closeOnInteractOutside = true,
  noHeader,
  noFooter,
  bg,
  p,
  headerBorderBottom,
  footerBorderTop,
  contentMaxWidth,
}: Readonly<BaseModalProps>) {
  return (
    <Dialog.Root
      size={size}
      closeOnInteractOutside={closeOnInteractOutside}
      open={isOpen}
      onOpenChange={onClose}
      placement={'center'}
      restoreFocus
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
        <Dialog.Content
        bg={bg}
        borderRadius="10px"
        css={
          contentMaxWidth
            ? {
                maxWidth: contentMaxWidth,
              }
            : {}
        }
        >
        {!noHeader ? (
          <Dialog.Header
            className={`px-[5.5rem] pt-[4.9rem] pb-[1rem] items-center justify-between ${
              headerBorderBottom ? 'border-b border-[#eeeeee]' : ''
            }`}
          >
              <Box>
                <Heading className='lex-m-20' color="#1D591B">
                  {title}
                </Heading>
                {subTitle}
              </Box>
              <Dialog.CloseTrigger position="static" asChild>
                <Box
                color="#bbbbbb"
                onClick={onClose}
                transition="all ease 0.5s"
                _hover={{
                  cursor: 'pointer',
                  color: 'black',
                }}
              >
                <BsXCircle size={18} />
              </Box>
              </Dialog.CloseTrigger>
          </Dialog.Header>
        ) : null}
        {!p ? (
          <Dialog.Body>{children}</Dialog.Body>
        ) : (
          <Dialog.Body p={p}>{children}</Dialog.Body>
        )}
        {!noFooter ? (
          <Dialog.Footer
            className={`${footerBorderTop ? 'border-t border-[#eeeeee]' : ''}`}
          >
            {footerChildren}
          </Dialog.Footer>
        ) : null}
      </Dialog.Content>
      </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

export default BaseModal;
