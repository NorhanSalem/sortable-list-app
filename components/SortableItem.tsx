import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface SortableItemProps {
  id: number;
  content: string;
  order: number;
}

const SortableItem: React.FC<SortableItemProps> = ({ id, content, order }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`p-4 m-2 border border-gray-300 rounded-2xl bg-[linear-gradient(to_right,#84bcf4_0%,#a3a4f6_50%,#b166f6_100%)] cursor-grab ${
        isDragging ? "opacity-50 scale-105 shadow-lg" : "opacity-100 scale-100"
      } transition-all duration-300 ease-in-out hover:bg-gray-200 hover:shadow-md`}
    >
      <span className=" bg-pink-200 rounded-xl p-1 mr-3"> order:{order} </span>{" "}
      {content}
    </div>
  );
};

export default React.memo(SortableItem);
