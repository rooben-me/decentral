import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Card = () => {
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
              className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8"
            >
              {appCard.map(({ name, logo }, index) => {
                return (
                  <Draggable key={name} draggableId={name} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="rounded-lg border flex flex-col items-center justify-center border-gray-200 p-4 lg:p-12 relative"
                      >
                        <div className="rounded-full h-16 w-16 lg:h-48 lg:w-48 p-4 lg:p-12 border border-gray-200 relative">
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

      <div className="">
        <h1 className="text-2xl font-semibold text-gray-900 mt-16">
          Popular Apps
        </h1>

        <div className="flex gap-8 mt-6 overflow-x-auto items-center">
          {popularAppsInfo.map(({ name, logo }) => {
            return (
              <button
                className="flex flex-col items-center justify-center p-8 transition-all ease-in-out rounded-lg border border-transparent hover:border-gray-200 active:border-gray-300"
                onClick={() => addAppCard(name, logo)}
                key={name}
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
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
