"use client";
import React, { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";

interface Item {
  id: number;
  content: string;
  order: number;
}

const initialItems: Item[] = [
  { id: 1, content: "First Item", order: 1 },
  { id: 2, content: "Second Item", order: 2 },
  { id: 3, content: "Third Item", order: 3 },
  { id: 4, content: "Fourth Item", order: 4 },
  { id: 5, content: "Fifth Item", order: 5 },
  { id: 6, content: "Sixth Item", order: 6 },
];

const SortableList: React.FC = () => {
  // Use null to prevent hydration
  const [items, setItems] = useState<Item[] | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setItems(initialItems);
    setMounted(true);
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id && items) {
      setItems((currentItems) => {
        if (!currentItems) return currentItems;
        
        const oldIndex = currentItems.findIndex((item) => item.id === Number(active.id));
        const newIndex = currentItems.findIndex((item) => item.id === Number(over.id));
        const newItems = arrayMove(currentItems, oldIndex, newIndex);

        // Recalculate order
        return newItems.map((item, index) => ({
          ...item,
          order: index + 1,
        }));
      });
    }
  };

  // We will not render anything until client side hydration is complete
  if (!mounted || !items) {
    return <div className="min-h-[300px] flex items-center justify-center">Loading...</div>;
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((item) => (
          <SortableItem
            key={item.id}
            id={item.id}
            content={item.content}
            order={item.order}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default React.memo(SortableList);
