interface FormErrorListProps {
  errors?: string[];
}

export const FormErrorList = ({ errors }: FormErrorListProps) => {
  if (!errors || errors.length === 0) {
    return null;
  }

  return (
    <div className="divide-y divide-red-200 border border-red-100 rounded">
      {errors.map((msg, i) => {
        return (
          <div key={`alert-${i}`} className="p-2 leading-none text-xs text-red-700 capitalize truncate" title={msg}>
            {msg}
          </div>
        );
      })}
    </div>
  );
};
