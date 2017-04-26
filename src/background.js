function draw(ctx) {
  let num = 0;
}

function fitToContainer(canvas){
  // Make it visually fill the positioned parent
  canvas.style.width = '100%';
  canvas.style.height = '100%';

  // ...then set the internal size to match
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

const background = {
  start({colors}) {
    const contexts = Array.from(document.querySelectorAll('.animated-background'))
      .map(canvas => canvas.getContext('2d'));
    const canvas = document.querySelector('.animated-background');
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
      ctx.fillStyle = 'gray';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
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

    setInterval(() => fitToContainer(canvas), 200);
  }
}

export default background;
