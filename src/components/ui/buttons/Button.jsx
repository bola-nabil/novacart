import { Link } from "react-router-dom";

const Button = ({title, path, color="blue"}) => {
    return (
        <div 
        className={`
            ${color === "blue" ? 
                "bg-blue-700 hover:bg-white text-white hover:text-blue-700" :
                 "bg-white hover:bg-blue-700 text-blue-700 hover:text-white"
        }
        w-fit 
        rounded-md 
        py-2 
        px-4
        transition-all
        duration-300
        ease-in-out
    `}
        >
            <Link 
                to={path}
                aria-label={title}
                className="flex items-center justify-center font-bold"
                >
                {title}
            </Link>
        </div>
    );
}

export default Button;