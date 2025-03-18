# Sortable List App

Next.js task, a modern drag-and-drop sortable list application built with Next.js and dnd-kit.

## Overview

This project demonstrates a responsive, interactive sortable list implementation using React and Next.js. Users can reorder items through an intuitive drag-and-drop interface, with smooth animations and visual feedback during the sorting process.

## Features

- **Drag and Drop Functionality**: Seamlessly reorder list items using mouse or touch interactions
- **Visual Feedback**: Visual cues during dragging operations
- **Order Tracking**: Automatic recalculation and display of item order
- **Responsive Design**: Works across desktop and mobile devices
- **Client-side Hydration**: Properly handles server-side rendering with client hydration

## Technologies Used

- **Next.js 15**: For server-side rendering and modern React features
- **React 19**: For building the user interface
- **dnd-kit**: A lightweight, modular toolkit for building drag-and-drop interfaces
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For styling and responsive design

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/NorhanSalem/sortable-list-app.git
cd sortable-list-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open http://localhost:3000 in your browser to see the application.

## How It Works

The application uses the dnd-kit library to implement drag-and-drop functionality:

1. SortableList.tsx sets up the drag-and-drop context and manages the state of the list items
2. SortableItem.tsx renders each individual item and handles the drag interactions
3. When an item is dragged and dropped, the list is reordered and each item's order property is updated

## Performance Analysis

To analyze the bundle size and performance:

```bash
npm run analyze
```

This will generate a visual representation of the bundle size to help optimize the application.
