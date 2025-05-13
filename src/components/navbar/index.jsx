import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Курсы");
  const [active, setActive] = useState(false);
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
        <div className="w-[90%] m-auto py-[15px]  ">
          <div className="flex items-center justify-between">
            <Link to={"/"} className="w-[100px]">
              <img className="w-full" src={logo} alt="" />
            </Link>
            <div className="flex items-center gap-[80px] font-normal text-2xl text-white">
              <Link to={"#"}>Главная</Link>
              <Link className="flex gap-2" to={"#"}>
                <span>О</span> нас
              </Link>
              <div className="w-full max-w-md">
                <div className="relative" ref={dropdownRef}>
                  <button
                    className="flex items-center justify-between w-full px-4 py-2 bg-black text-yellow-400 border border-yellow-400 rounded-full font-medium"
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

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div className="absolute left-0 w-[340px] right-0 mt-2 bg-black p-4 border border-yellow-400 rounded-lg shadow-lg z-10">
                      <div className="py-1 flex flex-col gap-[20px]">
                        {options.map((option, index) => (
                          <div
                            key={index}
                            className={`p-2 flex items-center w-full  rounded-full cursor-pointer
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
              <button className="btn">Позвонить</button>
            </div>
            <div className="flex items-center gap-[20px]">
              <button
                onClick={() => setActive(true)}
                className={
                  active
                    ? `border border-[#033538] rounded-[14px] w-[84px] h-[52px] bg-[#f0d625] font-normal text-[21px] text-white`
                    : "font-normal text-[21px] text-[#f0d625]"
                }
              >
                Ru
              </button>
              <button
                className={
                  active
                    ? "font-normal text-[21px] text-[#f0d625]"
                    : `border border-[#033538] rounded-[14px] w-[84px] h-[52px] bg-[#f0d625] font-normal text-[21px] text-white`
                }
                onClick={() => setActive(false)}
              >
                Uz
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
