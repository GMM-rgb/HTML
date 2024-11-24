const canvas = document.getElementById('CanvasTerminal');
const ctx = canvas.getContext('2d');
const container = document.getElementById('container');
const thumb = document.getElementById('thumb');
const scrollbar = document.getElementById('scrollbar');

let scrollY = 0;
let isDragging = false;
let startY = 0;

// Draw content on the canvas
function drawContent() {
    ctx.fillStyle = 'skyblue';
    ctx.fillRect(25, 25, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          ctx.fillStyle = 'skyblue'
            ctx.fillRect(100 * i, 100 * j, 50, 50);
            ctx.fillStyle = 'black';
            ctx.font = 'px100 TimesNewRoman';
            ctx.fillText('Hello! Welcome to the homepage, this is where you can find a whole bunch of HTML pages and others!', 7.5, 12.5);
            {  
              drawContent(fillText);
            }
        }
    }
}

// Update the canvas view based on scroll position
function updateView() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.translate(0, -scrollY);

    drawContent();
}

// Scroll event for mouse wheel
container.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollY += e.deltaY;

    scrollY = Math.max(0, Math.min(scrollY, canvas.height - container.clientHeight));

    updateView();
    updateThumbPosition();
});

// Mouse events for dragging the thumb
thumb.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY - thumb.offsetTop;
});
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        let newTop = e.clientY - startY;
        newTop = Math.max(0, Math.min(newTop, scrollbar.clientHeight - thumb.clientHeight));
        thumb.style.top = newTop + 'px';

        // Update scroll position based on thumb position
        scrollY = (newTop / (scrollbar.clientHeight - thumb.clientHeight)) * (canvas.height - container.clientHeight);
        updateView();
    }
});
document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Update thumb position based on scroll position
function updateThumbPosition() {
    let thumbTop = (scrollY / (canvas.height - container.clientHeight)) * (scrollbar.clientHeight - thumb.clientHeight);
    thumb.style.top = thumbTop + 'px';
}

// Initial draw
drawContent();
updateView();
