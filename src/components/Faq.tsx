const Faq3 = () => {
  return (
    <>
    <div className="relative overflow-x-hidden" id="faq">

<div className=" mb-10 md:mb-40 ">
  {/* min-h-96:grid-cols-1*/}
  <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-40 font-Goldman items-center md:w-fit mx-auto mt-6 md:mt-0">
    <div className="flex flex-row md:flex-col mr-4 text-white items-center justify-between text-center my-8 ">
      <div className="px-6">
        <h1 className="text-4xl md:text-8xl text-primary font-extrabold items-center justify-between">
          27+
        </h1>
        <p className="text-sm md:text-xl mb-8 items-center justify-between">
          SEPTEMBER
        </p>
      </div>
      <div className="px-6">
        <h1 className="text-4xl md:text-8xl text-primary font-extrabold items-center justify-between">
          30+
        </h1>
        <p className="text-sm md:text-xl mb-8 items-center justify-between ">TEAMS</p>
      </div>
      <div className="px-6">
        <h1 className="text-4xl md:text-8xl text-primary font-extrabold  items-center justify-between ">
          3+
        </h1>
        <p className="text-sm md:text-xl items-center mb-8 md:mb-0 justify-between">
          GUESTS
        </p>
      </div>
    </div>
    <div className="relative bg-white md:w-[50rem] text-white bg-opacity-5 backdrop-blur-md px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg sm:px-10 items-center">
      <div className="flex flex-col items-center">
        <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl font-Goldman">
          FAQ
        </h2>
      </div>
      <div className="mt-8 grid max-w-xxl gap-4">
        <div className="rounded-xl py-5 pl-2 border-l-2 border-b-2 border-primary">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span> What is Startup Street 9.0?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  className="stroke-primary"
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-white">
            It’s a 24-hour ideathon where teams pitch innovative startup ideas focused on social entrepreneurship.
            </p>
          </details>
        </div>
        <div className="rounded-xl py-5 pl-2 border-l-2 border-b-2 border-primary">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span>How many members can be in a team?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  className="stroke-primary"
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-white">
            Each team can have 2-5 members.
            </p>
          </details>
        </div>
        <div className="rounded-xl py-5 pl-2 border-l-2 border-b-2 border-primary">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span>How can I register?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  className="stroke-primary"
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-white">
            You can register through the graVITas website.
            </p>
          </details>
        </div>
        <div className="rounded-xl py-5 pl-2 border-l-2 border-b-2 border-primary">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span>Can we submit ideas in any domain?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  className="stroke-primary"
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-white">
            Yes, as long as they align with social entrepreneurship , SDGs and impact.
            </p>
          </details>
        </div>
      </div>
    </div>
  </div>
</div>
<div className='h-[16rem] w-[16rem] md:h-[20rem] md:w-[20rem] bg-secondary rounded-full  absolute -z-10 blur-[60rem] bottom-0'></div>
</div>
        
      <div className='h-[16rem] w-[16rem] md:h-[20rem] md:w-[20rem] bg-secondary rounded-full  absolute -z-10 blur-[60rem] bottom-0'></div>

    </>
  );
}

export default Faq3