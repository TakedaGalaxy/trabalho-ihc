import "./container.scss";

export default function EstruturaContainer({ children, className }) {
  return <div className={`Container ${className ?? ""}`}>{children}</div>;
}
