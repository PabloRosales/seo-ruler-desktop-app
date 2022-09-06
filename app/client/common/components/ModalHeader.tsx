interface ModalHeaderProps {
  className?: string;
  title: string;
}

export const ModalHeader = ({ title, className }: ModalHeaderProps) => {
  return (
    <h2 className={`text-lg mb-3 roboto ${className}`}>
      <span>{title}</span>
    </h2>
  );
};
