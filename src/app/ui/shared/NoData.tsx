import { RiErrorWarningFill } from 'react-icons/ri';

const NoData = (props: WrapperProps) => {
  const { text } = props;

  return (
    <div className='flex flex-col justify-center items-center'>
      <RiErrorWarningFill size={25} className="icon" />
      <p className='text-xl'>{text || 'NO DATA'}</p>
    </div>
  );
};

export default NoData;

interface WrapperProps {
  text: any;
}
