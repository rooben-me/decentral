import React from "react";

const DragHandleIcon = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1">
        <span className="w-1 h-1 rounded-full bg-grey-5" />
        <span className="w-1 h-1 rounded-full bg-grey-5" />
      </div>
      <div className="flex items-center gap-1">
        <span className="w-1 h-1 rounded-full bg-grey-5" />
        <span className="w-1 h-1 rounded-full bg-grey-5" />
      </div>
      <div className="flex items-center gap-1">
        <span className="w-1 h-1 rounded-full bg-grey-5" />
        <span className="w-1 h-1 rounded-full bg-grey-5" />
      </div>
    </div>
  );
};

export default DragHandleIcon;
