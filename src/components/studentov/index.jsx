function Studentov() {
  const data = [
    {
      id: 1,
      price: " 300+",
      title: " Довольных студентов",
    },
    {
      id: 2,
      price: " 25+",
      title: " Преподавателей",
    },
    {
      id: 3,
      price: " 60+",
      title: " групп",
    },
  ];
  return (
    <section className="w-[90%] m-auto mt-[-50px] max-[440px]:my-[60px]">
      <div className="flex items-center justify-between max-[768px]:grid max-[768px]:grid-cols-2 max-[768px]:place-items-center gap-5">
        {data?.map((value, index) => (
          <div
            key={value?.value}
            className={`rounded-[30px] w-[398px] h-[369px] bg-[#f0d625] flex items-center flex-col justify-center shadow-2xl shadow-yellow-400 max-[768px]:w-[300px] max-[768px]:h-[280px] max-[440px]:w-[150px] max-[440px]:h-[140px] max-[440px]:rounded-[10px] ${
              index === 2 ? "max-[768px]:col-span-2" : ""
            }`}
          >
            <h1 className="font-extrabold text-[120px] text-center text-black max-[768px]:text-[80px] max-[440px]:text-[30px]">
              {value?.price}
            </h1>
            <h4 className="font-semibold text-[40px] leading-[105%] text-center text-black max-[768px]:text-[20px] max-[440px]:text-[10px]">
              {value?.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Studentov;
