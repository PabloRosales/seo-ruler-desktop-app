import { ButtonProps } from './Button';
import { classNames } from '../helpers/classNames';

interface IconButtonProps extends Omit<ButtonProps, 'children' | 'type'> {
  text?: string;
  icon: string;
  danger?: boolean;
}

export const IconButton = ({ text, danger, icon, disabled, onClick, className }: IconButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        'inline-block text-sm inline-flex flex-wrap items-center justify-center font-medium rounded',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        danger ? 'text-red-600 focus:ring-red-500' : 'text-blue-600 focus:ring-blue-500',
        className,
      )}
    >
      {icon && <i className={classNames(icon, 'fa-sm mr-3')} />}
      {text && <div className="w-full leading-none pt-1.5 text-[7px] uppercase text-gray-700">{text}</div>}
    </button>
  );
};
