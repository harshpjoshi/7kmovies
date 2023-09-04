function Dot({ isDisable }) {
  return (
    <div
      className={`w-[8px] h-[8px] rounded-full ${
        isDisable ? "bg-gray-200" : "bg-custom-blue"
      } m-2`}
    ></div>
  );
}

export default Dot;
