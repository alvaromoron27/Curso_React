/* eslint-disable react/prop-types */
export const Square = ({ children, isSelected, onClick }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};
