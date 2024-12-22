import { Link } from "react-router-dom";

// If this is a new component, here's a complete version:
const Navigation = () => {
  return (
    <nav>
      <Link 
        to="/swap" 
        className="text-primary-500 hover:text-primary-600"
      >
        Swap Tokens
      </Link>
    </nav>
  );
};

export default Navigation;