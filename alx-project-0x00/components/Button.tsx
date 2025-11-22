import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 transition duration-300 ${styles}`}>
      {title}
    </button>
  );
};

export default Button;