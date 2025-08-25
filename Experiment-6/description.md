# 🖌️ SVG Drawing Tool

An interactive web-based drawing tool that uses SVG and JavaScript to let users draw freehand paths directly on a canvas. The tool responds to mouse actions in real-time and supports multiple strokes without reloading the page.

---

## 📋 Overview

This SVG Drawing Tool allows users to sketch freely inside an SVG canvas using their mouse. It's built using HTML, CSS, and plain JavaScript, making it lightweight and easy to understand. Users can click and drag to draw multiple shapes/lines smoothly using the SVG `<path>` element.

---

## 🚀 Features

✅ Freehand drawing with mouse  
✅ Responsive mouse event handling (mousedown, mousemove, mouseup)  
✅ Dynamic SVG path creation  
✅ Supports multiple strokes  
✅ Clean and minimal UI  
✅ Easily extensible (colors, shapes, undo, etc.)

---

## ⚙️ How It Works

- When the user presses the mouse button down (`mousedown`), a new SVG `<path>` is created.
- As the mouse moves (`mousemove`), the path data (`d` attribute) is continuously updated to follow the cursor.
- On mouse release (`mouseup`), the current path is finalized and added to the canvas.
- Each stroke is saved as an individual path, allowing unlimited freehand strokes.

---