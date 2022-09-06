interface PageHeaderProps {
  className?: string;
  title: string;
  icon?: string;
}

export const PageHeader = ({ icon, title, className }: PageHeaderProps) => {
  return (
    <h1 className={`text-2xl mb-3 roboto ${className}`}>
      {icon && <img src={icon} alt={title} />}
      <span>{title}</span>
    </h1>
  );
};
