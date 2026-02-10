import "./Button.css";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  text: string;
  navigateTo?: string; // Make navigateTo optional
  onClick?: () => void; // Add onClick as an optional prop
  variant?: 'primary' | 'secondary'; // Add variants
}

function Button({ text, navigateTo, onClick, variant = 'primary' }: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(); // Call the custom onClick handler if provided
    } else if (navigateTo) {
      navigate(navigateTo); // Navigate to the specified route
    }
  };

  return (
    <button className={`button button-${variant}`} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;