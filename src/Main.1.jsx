export function Main() {
  return (
    <div className="px-[50px] py-[20px] flex justify-between items-center">
      <div className="marketing-page-left max-w-[50%]">
        <p className="uppercase px-8 py-2 bg-[#1c4a3e] text-white rounded max-w-max font-medium">
          shopify theme os 2.0
        </p>
        <h1 className="text-[42px] capitalize font-medium mt-[20px] w-[80%]">
          the
          <span id="marketing" className="text-[#228c70]">
            best performance
          </span>
          premium shopify theme
        </h1>
        <p className="mt-[30px] text-[14px]">
          The best theme for every client. Adapts to any website. Built with
          flexibility, quality, performance and customer experience in mind.
        </p>
        <div className="flex items-center gap-[30px] mt-[40px] font-medium">
          <div className="flex flex-col items-center">
            <p>15+</p>
            <p>HOME PAGES</p>
          </div>
          <div className="flex flex-col items-center">
            <p>18+</p>
            <p>PRODUCT PAGES</p>
          </div>
          <div className="flex flex-col items-center">
            <p>16+</p>
            <p>SHOP PAGES</p>
          </div>
          <div className="flex flex-col items-center">
            <p>05+</p>
            <p>HEADER STYLES</p>
          </div>
        </div>
        <div>
          <button className="hover:text-[white] hover:bg-[#0f8868] hover:border-[#0f8868] rounded px-[50px] py-[10px] border-[#1c4a3e] border-2 bg-[#1c4a3e] me-5 mt-[50px] text-white font-medium duration-[350ms]">
            Explore Features
          </button>
          <button className="hover:text-white hover:bg-[#1c4a3e] rounded px-[50px] py-[10px] border-[#1c4a3e] border-2 me-5 mt-[50px] text-[#1c4a3e] font-medium duration-[350ms]">
            View Demos
          </button>
        </div>
      </div>
      <div className="marketing-page-right w-[50%] py-20 px-6 rounded bg-white relative">
        <img
          src="https://templates.bulltheme.com/athens/assets/images/hero/bg-desktop-2.webp"
          alt="marketing-img.jpeg"
        />
        <img
          className="absolute left-0 bottom-0"
          src="https://templates.bulltheme.com/athens/assets/images/hero/bg-setting.png"
          alt=""
          width="200px"
        />
      </div>
    </div>
  );
}
