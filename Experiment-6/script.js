const svg = document.getElementById('drawingCanvas');
let isDrawing = false;
let path = null;
let d = '';

svg.addEventListener('mousedown', (e) => {
  isDrawing = true;
  const point = getMousePosition(e);
  d = `M ${point.x} ${point.y}`;
  path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke", "blue");
  path.setAttribute("fill", "none");
  path.setAttribute("stroke-width", "2");
  path.setAttribute("d", d);
  svg.appendChild(path);
});

svg.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;
  const point = getMousePosition(e);
  d += ` L ${point.x} ${point.y}`;
  path.setAttribute("d", d);
});

svg.addEventListener('mouseup', () => {
  isDrawing = false;
  path = null;
  d = '';
});

function getMousePosition(evt) {
  const CTM = svg.getScreenCTM();
  return {
    x: (evt.clientX - CTM.e) / CTM.a,
    y: (evt.clientY - CTM.f) / CTM.d
  };
}
