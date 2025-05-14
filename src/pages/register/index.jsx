import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import roboto from "../../assets/regster.png";
import roboto2 from "../../assets/showcase_img.png";
export default function CourseRegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    age: "",
    course: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const courses = [
    "Робототехника",
    "Живопись для взрослых",
    "Живопись для детей",
    "Шахмат",
    "Английский",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, phone, age, course } = formData;

    if (!firstName || !lastName || !phone || !age || !course) {
      alert("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    console.log(formData);
    alert("Ma'lumot yuborilsinmi");
    clear();

    return;
  };

  const clear = () => {
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      age: "",
      course: "",
    });
  };

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center p-4 ">
      <div className="relative w-full max-w-4xl mx-auto bg-black rounded-lg overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

        <div className="relative flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 flex items-center justify-center p-6 hidden max-[768px]:block">
            <img src={roboto2} alt="Robot" className="w-48 h-auto " />
          </div>
          <div className="w-full md:w-2/3 bg-white rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Приглашаем на первый урок!
              </h1>
              <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Name
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+998 99-888-77-77"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Age
                  </label>
                  <input
                    type="text"
                    name="age"
                    placeholder="25.08/2000"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div className="relative">
                  <label className="block text-gray-700 font-medium mb-1">
                    Выберете курс
                  </label>
                  <div
                    className="w-full p-3 border border-gray-300 rounded-md flex justify-between items-center cursor-pointer"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span
                      className={
                        formData.course ? "text-gray-800" : "text-gray-400"
                      }
                    >
                      {formData.course || "Выберете курс"}
                    </span>
                    {isDropdownOpen ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                      {courses.map((course) => (
                        <div
                          key={course}
                          className="p-3 hover:bg-gray-100 cursor-pointer flex items-center"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, course }));
                            setIsDropdownOpen(false);
                          }}
                        >
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => clear()}
                  type="button"
                  className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md font-medium hover:bg-gray-300 transition"
                >
                  НАЗАД
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-yellow-400 text-gray-800 rounded-md font-medium hover:bg-yellow-500 transition"
                >
                  ЗАПИСАТЬСЯ
                </button>
              </div>
            </form>
          </div>

          <div className="w-full md:w-1/3 flex items-center justify-center p-6 max-[768px]:hidden block">
            <img
              src={roboto}
              alt="Robot"
              className="w-48 h-auto  max-[768px]:hidden block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
