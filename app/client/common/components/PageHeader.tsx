interface PageHeaderProps {
  className?: string;
  title: string;
  icon?: string;
}

export const PageHeader = ({ icon, title, className }: PageHeaderProps) => {
  return (
    <h1 className={`text-2xl text-center mb-3 roboto text-gray-600 dark:text-blue-300 select-none ${className}`}>
      {icon && <i className={`${icon} mr-2 fa-xs`} />}
      <span>{title}</span>
    </h1>
  );
};
