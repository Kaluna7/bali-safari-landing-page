export function Header() {
  return (
    <div className="flex justify-center absolute mt-20 w-full">
      <div className="bg-white rounded-2xl h-[150px] w-[800px] flex justify-center items-center">
        <ul className="flex flex-row gap-8 text-[42px] cursor-pointer list-none">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Safari</a></li>
          <li><a href="#">Footer</a></li>
        </ul>
      </div>
    </div>
  );
}
