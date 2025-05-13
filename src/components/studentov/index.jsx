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
    <section className="w-[90%] m-auto mt-[-50px]">
      <div className="flex items-center justify-between">
        {data?.map((value) => (
          <div
            key={value?.value}
            className="rounded-[30px] w-[398px] h-[369px] bg-[#f0d625] flex items-center flex-col justify-center shadow-2xl shadow-yellow-400"
          >
            <h1 className="font-extrabold text-[120px] text-center text-black">
              {value?.price}
            </h1>
            <h4 className="font-semibold text-[40px] leading-[105%] text-center text-black">
              {value?.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Studentov;
