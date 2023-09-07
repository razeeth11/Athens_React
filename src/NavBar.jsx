export function NavBar() {
  return (
    <div className="flex justify-between items-center px-[50px] py-[20px]">
      <img src="src\images\logo main.svg" alt="logo.svg" width="150px" />
      <ul className="flex items-center gap-[40px] font-medium">
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Demos</a>
        </li>
        <li>
          <a href="#">Mobile-First</a>
        </li>
        <li>
          <a href="#">Performance</a>
        </li>
        <li>
          <a href="#">SEO</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Open Store Free</a>
        </li>
      </ul>
      <button className="hover:text-[white] hover:bg-[#0f8868] px-[30px] py-[12px] font-medium text-white bg-[#1c4a3e] rounded duration-[350ms]">
        Purchase Now
      </button>
    </div>
  );
}
