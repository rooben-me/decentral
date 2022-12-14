import { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import { MenuAlt2Icon } from "@heroicons/react/outline";

import SideBar from "../components/SideBar";
const DashBoard = dynamic(import("../components/Dashboard"));

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [winReady, setwinReady] = useState(false);

  useEffect(() => {
    setwinReady(true);
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 md:hidden z-10 flex-shrink-0 flex h-16 bg-white shadow">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <main className="flex-1">
            <div className="py-6">
              <div className="px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl mt-8 mb-8 font-semibold text-grey-9">
                  Connected Apps
                </h1>
              </div>
              <div className="mx-auto px-4 sm:px-6 md:px-8">
                <div>{winReady ? <DashBoard /> : null}</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
