function draw(ctx) {
  let num = 0;
}

const background = {
  start({colors}) {
    const contexts = Array.from(document.querySelectorAll('.animated-background'))
      .map(canvas => canvas.getContext('2d'));
    const lineSeparation = 2;
    const lineLength = 20;
    const lineWidth = 4;
    const lines = colors.map((color, index) => ({
      x: index * lineLength,
      y: (index + 1) * (lineWidth + lineSeparation),
      color
    }));

    function draw(ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      lines.forEach(line => {
        ctx.beginPath();
        ctx.strokeStyle = line.color;
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + lineLength, line.y);
        ctx.stroke();

        // Update
        line.x += 0.1;
        if (line.x > ctx.canvas.width) {
          line.x = -lineLength;
        }
      });
    }

    // Context global setup
    contexts.forEach(ctx => {
      ctx.globalAlpha = 0.8;
      ctx.lineCap = "round";
      ctx.lineWidth = lineWidth;
    });

    function drawAll() {
      contexts.forEach(draw);
      window.requestAnimationFrame(drawAll);
    }
    window.requestAnimationFrame(drawAll);
  }
}

export default background;
