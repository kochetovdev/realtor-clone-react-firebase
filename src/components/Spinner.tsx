import spinner from "../assets/svg/spinner.svg";

const Spinner = () => {
  return (
    <div className="fixed left-0 right-0 bottom-0 top-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div>
        <img src={spinner} alt="Loading..." className="h-24" />
      </div>
    </div>
  );
};

export default Spinner;
