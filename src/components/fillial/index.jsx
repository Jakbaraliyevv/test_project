import { useState } from "react";
import { ChevronDown, Phone, Clock, MapPin } from "lucide-react";

export default function FillialComponents() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLocation, setActiveLocation] = useState("ФИЛИАЛ Ц4");

  const courses = [
    "Работотехника",
    "Живопись для взрослых",
    "Живопись для детей",
    "Шахмат",
    "Английский",
  ];

  return (
    <div className="flex justify-center items-center  bg-gray-900 p-[40px]">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-[85px] leading-[104%] font-bold uppercase text-center text-[#f0d625] max-[440px]:text-[40px]">
            ПОЛУЧИТЕ БЕСПЛАТНЫЙ ПЕРВЫЙ УРОК
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16">
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full md:w-48 lg:w-56 p-3 rounded bg-white text-black"
          />

          <input
            type="tel"
            placeholder="Номер телефона"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full md:w-48 lg:w-56 p-3 rounded bg-white text-black"
          />

          <div className="relative w-full md:w-48 lg:w-56">
            <div
              className="w-full p-3 rounded bg-white text-black flex justify-between items-center cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{selectedCourse || "Выберете курс"}</span>
              <ChevronDown className="h-5 w-5 text-black" />
            </div>

            {isDropdownOpen && (
              <div className="absolute w-full bg-white rounded-b shadow-lg mt-1 z-10">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="p-3 hover:bg-gray-100 cursor-pointer text-black"
                    onClick={() => {
                      setSelectedCourse(course);
                    }}
                  >
                    {course}
                  </div>
                ))}
              </div>
            )}
          </div>

          <input
            type="text"
            placeholder="Возраст"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full md:w-48 lg:w-56 p-3 rounded bg-white text-black"
          />

          <button className="w-full md:w-48 lg:w-56 p-3 rounded bg-yellow-400 text-black font-bold uppercase hover:bg-yellow-500 transition-colors shadow-lg">
            ПОЛУЧИТЬ
          </button>
        </div>

        <div className="flex justify-center gap-6 mb-16">
          <button
            className={`py-3 px-6 rounded font-bold transition-colors shadow-lg max-[440px]:text-[10px] ${
              activeLocation === "ФИЛИАЛ Ц4"
                ? "bg-yellow-400 text-black"
                : "bg-transparent text-yellow-400 border-2 border-yellow-400 hover:bg-yellow-400/20"
            }`}
            onClick={() => setActiveLocation("ФИЛИАЛ Ц4")}
          >
            ФИЛИАЛ Ц4
          </button>

          <button
            className={`py-3 px-6 rounded font-bold transition-colors max-[440px]:text-[12px] ${
              activeLocation === "ФИЛИАЛ БЕРУНИ"
                ? "bg-yellow-400 text-black"
                : "bg-transparent text-yellow-400 border-2 border-yellow-400 hover:bg-yellow-400/20"
            }`}
            onClick={() => setActiveLocation("ФИЛИАЛ БЕРУНИ")}
          >
            ФИЛИАЛ БЕРУНИ
          </button>
        </div>

        <div className="flex justify-center flex-wrap gap-10 mt-10">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
              <MapPin className="h-4 w-4 text-black" />
            </div>
            <span className="text-white">Адрес Орьенир</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
              <Clock className="h-4 w-4 text-black" />
            </div>
            <span className="text-white">График работы</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
              <Phone className="h-4 w-4 text-black" />
            </div>
            <span className="text-white">Номера телефонов</span>
          </div>
        </div>
      </div>
    </div>
  );
}
