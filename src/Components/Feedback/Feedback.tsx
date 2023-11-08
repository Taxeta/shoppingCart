import { useState, useEffect } from "react";
import "./Feedback.css";

interface ToastProps {
  message: string;
}

const Feedback = ({ message }: ToastProps): React.ReactElement => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return visible ? <div className="toast">{message}</div> : <></>;
};

export default Feedback;
