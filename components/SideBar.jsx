import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CogIcon,
  LinkIcon,
} from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavElements = () => {
  const [openChild, setOpenChild] = useState(false);

  return (
    <nav className="flex-1 px-2 pb-4 space-y-2">
      <a
        onClick={() => setOpenChild(!openChild)}
        className="bg-gray-100 hover:bg-gray-200 text-gray-900 cursor-pointer group flex items-center px-3 py-3 text-sm font-medium rounded-md"
      >
        <span className="flex w-full justify-between">
          <span className="flex gap-2 items-center">
            <HomeIcon className="text-gray-500 w-5 h-5" />
            Dashboard
          </span>
          {openChild ? (
            <ChevronUpIcon className="w-4 h-4" />
          ) : (
            <ChevronDownIcon className="w-4 h-4" />
          )}
        </span>
      </a>
      <Transition.Root show={openChild} as={Fragment}>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in duration-300 transform"
          enterFrom="-translate-y-2 opacity-0"
          enterTo="translate-y-0 opacity-100"
          leave="transition ease-in duration-300 transform"
          leaveFrom="translate-y-0 opacity-100"
          leaveTo="-translate-y-2 opacity-0"
        >
          <div className="flex flex-col gap-2">
            <a className="ml-4 bg-gray-50 text-gray-900 group flex items-center px-3 py-3 text-sm font-medium rounded-md">
              <span className="flex w-full justify-between">
                <span className="flex items-center gap-2">
                  <LinkIcon className="text-gray-500 w-5 h-5" />
                  Connected Apps
                </span>
              </span>
            </a>
            <a className="ml-4 bg-gray-50 text-gray-900 group flex items-center px-3 py-3 text-sm font-medium rounded-md">
              <span className="flex w-full justify-between">
                <span className="flex items-center gap-2">
                  <CogIcon className="text-gray-500 w-5 h-5" />
                  Settings
                </span>
              </span>
            </a>
          </div>
        </Transition.Child>
      </Transition.Root>
    </nav>
  );
};

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 flex items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="/Decental_logo.svg"
                    alt="Decentral"
                  />
                </div>
                <div className="mt-8 flex-1 h-0 overflow-y-auto">
                  <NavElements />
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img
              className="h-5 w-auto"
              src="/Decental_logo.svg"
              alt="Decentral"
            />
          </div>
          <div className="mt-8 flex-grow flex flex-col">
            <NavElements />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
