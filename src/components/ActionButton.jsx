function ActionButton({
  children,
  dispatch,
  type,
  payload,
  onClick,
  disabled,
}) {
  return (
    <button
      onClick={() => (onClick ? onClick() : dispatch({ type, payload }))}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
export default ActionButton;
