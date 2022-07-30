import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { Tooltip } from "@mantine/core";
import DragHandleIcon from "./icons/DragHandleIcon";

const DashBoard = () => {
  const IMAGE_URL = "/images/apps_logo/";

  const recentApps = [
    {
      name: "Aave",
      logo: "aave.svg",
    },
    {
      name: "Avalanche",
      logo: "avalanche.svg",
    },
    {
      name: "Compound",
      logo: "compound.svg",
    },
    {
      name: "Zapper",
      logo: "zapper.svg",
    },
  ];

  const popularApps = [
    {
      name: "Uni Swap",
      logo: "uniswap.svg",
    },
    {
      name: "Ox",
      logo: "zrx.svg",
    },
    {
      name: "Sushi Swap",
      logo: "sushi.svg",
    },
    {
      name: "Yearn finance",
      logo: "yearn.svg",
    },
    {
      name: "Maker",
      logo: "maker.svg",
    },
    {
      name: "Chain Link",
      logo: "chainlink.svg",
    },
  ];

  const [popularAppsInfo, setPopularApps] = useState(popularApps);
  const [appCard, updateAppCards] = useState(recentApps);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(appCard);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateAppCards(items);
  }

  function addAppCard(name, logo) {
    updateAppCards([...appCard, { name: name, logo: logo }]);

    const filteredPopularApps = popularAppsInfo.filter(
      (item) => item.name !== name
    );
    setPopularApps(filteredPopularApps);
  }

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="app-cards" direction="horizontal">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex overflow-x-auto gap-4 lg:gap-8 relative pb-4"
            >
              {appCard.map(({ name, logo }, index) => {
                return (
                  <Draggable key={name} draggableId={name} index={index}>
                    {(provided, snapshot) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className={`rounded-lg border min-w-[240px] flex flex-col items-center justify-center bg-white border-gray-200 p-4 lg:p-8 relative transition-shadow ease-in-out ${
                          snapshot.isDragging && "shadow-lg"
                        }`}
                      >
                        <div className="flex items-center justify-between absolute inset-x-4 top-4">
                          <Tooltip label="active">
                            <span className="bg-green-5 ring-2 ring-green-3 w-2 h-2 rounded-full" />
                          </Tooltip>
                          <Tooltip label="Drag to re-order">
                            <div {...provided.dragHandleProps}>
                              <DragHandleIcon />
                            </div>
                          </Tooltip>
                        </div>
                        <div className="rounded-full h-16 w-16 p-4 lg:p-4 border border-gray-200 relative">
                          <img
                            src={`${IMAGE_URL}${logo}`}
                            className="object-contain w-full h-full"
                            alt=""
                          />
                        </div>
                        <h2 className="lg:text-2xl text-lg my-6 text-grey-9 font-semibold ">
                          {name}
                        </h2>
                        <span className="text-grey-7 text-center text-sm md:text-lg mb-2">
                          Connected to
                        </span>
                        <span className="text-sm md:text-lg text-center">
                          Main Account
                        </span>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      <div>
        <h1 className="text-2xl font-semibold text-grey-9 mt-16">
          Popular Apps
        </h1>

        <div className="flex gap-8 overflow-x-auto items-center pb-4">
          {popularAppsInfo.map(({ name, logo }) => {
            return (
              <Tooltip position="bottom" key={name} label="Click to Connect">
                <button
                  className="flex flex-col items-center justify-center p-8 transition-all ease-in-out rounded-lg border border-transparent hover:border-gray-200 active:border-gray-300"
                  onClick={() => addAppCard(name, logo)}
                >
                  <div className="rounded-full h-24 w-24 p-4 border border-gray-200 relative">
                    <img
                      src={`${IMAGE_URL}${logo}`}
                      className="object-contain w-full h-full"
                      alt=""
                    />
                  </div>
                  <span className="text-grey-7 w-full truncate text-center mt-4">
                    {name}
                  </span>
                </button>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DashBoard;
