import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export default function ConditionalChecker({
  checker,
  text,
}: Readonly<ConditionalCheckerProps>) {
  return (
    <div className="flex items-center mb-5">
      <div
        className={`h-5 w-5 flex items-center justify-center rounded-full mr-2 text-white ${
          checker ? 'bg-yellow' : 'bg-red'
        }`}
      >
        {checker ? (
          <CheckIcon fontSize="small" />
        ) : (
          <CloseIcon fontSize="small" />
        )}
      </div>
      <span className="condition_checker_text">{text}</span>
    </div>
  );
}

type ConditionalCheckerProps = {
  checker: boolean;
  text: string;
};
