import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Курсы");
  const [active, setActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    "Курсы",
    "роботoтехника",
    "Английский",
    "Живопись для детей",
    "Живопись для взрослых",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <section className="navbar bg-[#ffe000] py-[10px]">
      <div className="bg-black">
        <div className="w-[90%] m-auto py-[15px]">
          <div className="flex items-center justify-between">
            <Link to={"/"} className="w-[80px] md:w-[100px]">
              <img className="w-full" src={logo} alt="Logo" />
            </Link>

            <div className="hidden md:flex items-center gap-[30px] lg:gap-[60px] font-normal text-lg lg:text-2xl text-white">
              <Link to={"#"}>Главная</Link>
              <Link className="flex gap-2" to={"#"}>
                <span>О</span> нас
              </Link>

              <div className="w-full max-w-md">
                <div className="relative" ref={dropdownRef}>
                  <button
                    className="flex items-center justify-between w-full px-4 py-2 bg-black text-yellow-400 border border-yellow-400 rounded-full font-medium text-sm lg:text-base"
                    onClick={toggleDropdown}
                  >
                    <span className="truncate max-w-[180px]">
                      {selectedOption}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="absolute left-0 w-[280px] lg:w-[340px] right-0 mt-2 bg-black p-4 border border-yellow-400 rounded-lg shadow-lg z-10">
                      <div className="py-1 flex flex-col gap-[10px] lg:gap-[20px]">
                        {options.map((option, index) => (
                          <div
                            key={index}
                            className={`p-2 flex items-center w-full rounded-full cursor-pointer text-sm lg:text-base
                              ${
                                option === selectedOption
                                  ? "bg-yellow-400 text-black"
                                  : "border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black"
                              }
                              ${index === 1 ? "border-2 border-yellow-400" : ""}
                            `}
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <Link to={"#"}>Контакты</Link>
              <button className="btn hidden lg:block">Позвонить</button>
            </div>

            <div className="flex items-center gap-3 md:gap-[20px]">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActive(true)}
                  className={
                    active
                      ? `border border-[#033538] rounded-[14px] w-[60px] sm:w-[70px] md:w-[84px] h-[35px] sm:h-[40px] md:h-[52px] bg-[#f0d625] font-normal text-[14px] sm:text-[16px] md:text-[21px] text-white`
                      : "font-normal text-[14px] sm:text-[16px] md:text-[21px] text-[#f0d625]"
                  }
                >
                  Ru
                </button>
                <button
                  className={
                    active
                      ? "font-normal text-[14px] sm:text-[16px] md:text-[21px] text-[#f0d625]"
                      : `border border-[#033538] rounded-[14px] w-[60px] sm:w-[70px] md:w-[84px] h-[35px] sm:h-[40px] md:h-[52px] bg-[#f0d625] font-normal text-[14px] sm:text-[16px] md:text-[21px] text-white`
                  }
                  onClick={() => setActive(false)}
                >
                  Uz
                </button>
              </div>

              <button
                className="md:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <div className="flex flex-col gap-4 font-normal text-white">
                <Link to={"#"} className="block py-2">
                  Главная
                </Link>
                <Link to={"#"} className="block py-2 flex gap-1">
                  <span>О</span> нас
                </Link>

                <div className="relative" ref={dropdownRef}>
                  <button
                    className="flex items-center justify-between w-full px-4 py-3 bg-black text-yellow-400 border border-yellow-400 rounded-full font-medium"
                    onClick={toggleDropdown}
                  >
                    <span>{selectedOption}</span>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="mt-2 bg-black p-4 border border-yellow-400 rounded-lg shadow-lg">
                      <div className="py-1 flex flex-col gap-3">
                        {options.map((option, index) => (
                          <div
                            key={index}
                            className={`p-2 flex items-center w-full rounded-full cursor-pointer
                              ${
                                option === selectedOption
                                  ? "bg-yellow-400 text-black"
                                  : "border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black"
                              }
                              ${index === 1 ? "border-2 border-yellow-400" : ""}
                            `}
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link to={"#"} className="block py-2">
                  Контакты
                </Link>
                <button className="btn w-full py-3">Позвонить</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Navbar;
