

# Mini Page Builder

Mini Page Builder is a React-based application that allows users to create and customize pages by dragging and dropping components from a sidebar onto a blank canvas. This project aims to provide a user-friendly and interactive experience for building custom layouts.

## Features

- **Drag and Drop Components**: Users can drag and drop Label, Input, and Button components from the sidebar onto the canvas.
- **Modal Configuration**: When a component is dropped onto the canvas, a modal appears, allowing users to configure the component's properties, such as font size, font weight, and text content.
- **Position Elements**: Users can position components on the canvas by selecting the element then dragging and dropping them to the desired location.
- **Select and Edit Components**: Clicking on a component on the canvas selects it, and users can press Enter to open the configuration modal and update the component's properties.
- **Delete Components**: Selected components can be deleted by pressing the Delete key.
- **Local Storage Persistence**: All changes made to the canvas, including adding, updating, deleting, and repositioning components, are automatically saved to the browser's local storage for persistent data.
- **Export Functionality**: Users can export the current page configuration as a JSON file for easy sharing or backup purposes.

## Installation

1. Clone the repository:

```
git clone https://github.com/Ranjan-Harsh/ab-page-builder
```

2. Navigate to the project directory:

```
cd ab-page-builder
```

3. Install dependencies:

```
npm install
```

## Usage

1. Start the development server:

```
npm run dev
```

2. Drag and drop components from the sidebar onto the canvas to create your page layout.

3. Click on components to select them, and press Enter to open the configuration modal.

4. Modify the component properties in the modal and click "Save Changes" to update the component on the canvas.

5. Press the Delete key to remove the selected component from the canvas.

6. All changes are automatically saved to the browser's local storage.

7. To export the current page configuration, click the "Export" button and choose a location to save the JSON file.
