import "./Button.css";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
    text: string;
    navigateTo: string;
}

function Button({text, navigateTo}: ButtonProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navigateTo);
    }
    return <button className="button" onClick={handleClick}> {text} </button>
}

export default Button;