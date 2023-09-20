import Competitions from "./Competitions";

function Leagues() {
  return (
    <div className="w-full px-4 py-10 md:px-5 md:py-20 lg:px-20 h-auto flex flex-col gap-6 md:gap-20">
      <p className="text-3xl font-extrabold text-black">COUNTRY LEAGUES</p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Competitions />
      </div>
    </div>
  );
}
export default Leagues;
