import { Link } from "react-router";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-yellow-400 w-full">
      <div className=" w-[90%] m-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <Link
              to={"/"}
              className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4"
            >
              <img src={logo} alt="This is logo" />
            </Link>

            <p className="text-black font-medium mb-4 text-center md:text-left max-w-xs">
              SLOGAN ILorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-black flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-black flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-black flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-black flex items-center justify-center md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Courses Section - Center on desktop, Middle on mobile */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 md:mb-6">Курсы</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Работотехника
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Английский для взрослых
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Английский для детей
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Шахмат
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Живопись
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts Section - Right on desktop, Bottom on mobile */}
          <div>
            <h3 className="text-2xl font-bold mb-4 md:mb-6">Контакты</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Телеграм
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Инстаграм
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Ютюб
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-4 border-t border-black/10">
          <p className="text-sm">
            Ideallux.com © 2000-2024, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
