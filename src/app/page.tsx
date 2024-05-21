import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-row max-w-100vw h-full min-h-screen p-16 justify-center">
      <section className="flex flex-column flex-wrap z-10 w-full max-w-7xl content-start items-start justify-start justify-items-start">
        <div className="flex flex-row flex-wrap h-auto w-full items-start justify-center">
          <h1 className="w-full h-full mr-auto font-secondary text-title lg:text-left sm:text-center sm:mx-auto">
            Welcome to BlueOrbital
          </h1>
          <h2 className="w-auto h-full font-main text-sub-title lg:typewriter lg:pl-3 lg:border-t-0 sm:text-center sm:mx-auto sm:border-t-2">
            Bespoke Web Design.
          </h2>
        </div>
        <div className="w-auto h-auto max-w-2/3 mx-auto my-12 self-center">
          <Image
            className="relative animate-fade-in"
            src="/BO_logo_white_trans.png"
            alt="Large Blue Orbital Logo"
            width={400}
            height={70}
            priority
          />
        </div>
        <div className="flex flex-row flex-wrap h-auto w-full items-center justify-center">
          <h2 className="w-full h-full font-main text-3xl text-center mb-8">
            Our site is currently in development, try back again soon
          </h2>
          <h2 className="w-auto h-full font-main text-3xl dotdot pl-3 text-center self-center">
            ...
          </h2>
        </div>     
      </section>
      {/* <section className="z-10 h-screen w-full max-w-5xl items-start justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-centre border-b">
          Our site is currently under development, but we are not far off now... 
        </p>
      </section> */}


      {/*
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
