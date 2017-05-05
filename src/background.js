function fitToContainer(canvas){
  // Make it visually fill the positioned parent
  canvas.style.width = '100%';
  canvas.style.height = '840px';

  // ...then set the internal size to match
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

let paused = false;

const background = {
  start({colors, lineSeparation=22, lineLength=20, lineWidth=4, tileWidth=200, alpha=0.4}) {
    const targetCanvas = document.querySelector('.animated-background');
    const targetCtx = targetCanvas.getContext('2d');
    const modelCanvas = document.createElement("canvas");
    const ctx = modelCanvas.getContext('2d');
    const modelWidth = tileWidth;
    function generateLines(yOffset) {
      return colors.map((color, index) => ({
        x: Math.random() * modelWidth,
        y: ((index + 1) * (lineWidth + lineSeparation)) + yOffset,
        color,
        speed: (Math.random() * 0.2) + 0.1
      }));
    }

    const lines = generateLines(0).concat(generateLines((lineSeparation + lineWidth) * colors.length));

    modelCanvas.width = modelWidth;
    modelCanvas.height = ((lineSeparation + lineWidth) * lines.length) + lineWidth;

    // Context global setup
    ctx.globalAlpha = alpha;
    ctx.lineCap = "round";
    ctx.lineWidth = lineWidth;

    function draw() {
      if (paused) {
        window.requestAnimationFrame(draw);
        return;
      }
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      targetCtx.clearRect(0, 0, targetCtx.canvas.width, targetCtx.canvas.height);
      lines.forEach(line => {
        ctx.beginPath();
        ctx.strokeStyle = line.color;
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + lineLength, line.y);
        // Draw behind for warping
        ctx.moveTo(line.x - modelWidth, line.y);
        ctx.lineTo(line.x - modelWidth + lineLength, line.y);
        ctx.stroke();

        // Update
        line.x += line.speed;
        if (line.x > modelWidth) {
          line.x = 0;
        }
      });

      // Apply pattern to target canvas
      targetCtx.fillStyle = targetCtx.createPattern(modelCanvas, "repeat");;
      targetCtx.fillRect(0, 0, targetCanvas.width, targetCanvas.height);

      window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);

    fitToContainer(targetCanvas);
    document.body.onresize = function() {
      fitToContainer(targetCanvas);
    };
  },
  pause() {
    paused = true;
  },
  resume() {
    paused = false;
  }
}

export default background;
