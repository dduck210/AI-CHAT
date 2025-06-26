<<<<<<< HEAD
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4 shadow mt-0">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <span className="text-xl font-bold">
            <Link to="/">Todo App</Link>
          </span>
          <span className="text-xs bg-white/30 rounded px-2 py-1 ml-2">
            © 2025 To Do App™. All Rights Reserved.
          </span>
        </div>
        <nav className="flex gap-4 items-center">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <a
            href="https://facebook.com/dduck.210"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Facebook
          </a>
          <a
            href="https://github.com/dduck210/duc-todolist"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Github
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Tailwind CSS
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
=======
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 text-sm text-gray-700 mt-8 border-t">
      <div className="flex justify-center items-center gap-3 mb-2">
        <img
          src="https://ui-avatars.com/api/?name=Duong+Anh+Duc&background=random"
          alt="Avatar Duong Anh Duc"
          className="w-8 h-8 rounded-full border"
        />
        <div className="text-base font-semibold">
          Duong Anh Duc{" "}
          <span className="text-xs text-indigo-500">(OMI.BU2)</span>
        </div>
      </div>
      <div className="mt-1 text-gray-500">
        &copy; {new Date().getFullYear()} - All rights reserved.
      </div>
    </footer>
  );
}
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
