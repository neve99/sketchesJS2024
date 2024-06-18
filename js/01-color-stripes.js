// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

for (let i = 0; i <= 200; i++) {
  const div = $('<div>', {
    class: `stripe${i}`,
  });

  // div.css('background-color', getRandomColor());
  div.css('background', getRandomGradientColor('red'));
  // div.css('background-color', getBnw());
  $('.collection').append(div);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  // console.log(color);
  return color;
}

function getVibrantColor() {
  const hue = Math.floor(Math.random() * 360); // Random hue value between 0 and 360
  const saturation = 80 + Math.random() * 40; // Random saturation value between 60% and 100%
  const lightness = 50; // Fixed lightness value (50% makes colors more vivid)

  // Convert HSL values to RGB
  const rgbColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  return rgbColor;
}


function getRandomGradientColor(middleColor) {
  // Random hue for top and bottom colors
  const hue = Math.floor(Math.random() * 360);
  const hue2 = Math.floor(Math.random() * 360);
  const topSaturation = Math.floor(Math.random() * 40) + 60; // 60% to 100% saturation
  const bottomSaturation = Math.floor(Math.random() * 40) + 60; // 60% to 100% saturation
  const lightness = 50; // Middle color (white)

  // Generate gradient CSS string
  const gradientColor = `linear-gradient(
      to top,
      hsl(${hue}, ${topSaturation}%, ${lightness}%),
            hsl(${hue}, ${topSaturation}%, ${lightness}%),

            ${middleColor},

            hsl(${hue}, ${topSaturation}%, ${lightness}%),

      hsl(${hue}, ${bottomSaturation}%, ${lightness}%)
  )`;
  // console.log(gradientColor);
  return gradientColor;
}

function getBnw() {
  let rdm = Math.random();
  if (rdm >= 0.5) {
    return '#fff';
  } else {
    return '#000';
  }
}

// for (let i = 1; i <= 7; i++) {
//   const stripe = $(`.stripe${i}`);
//   stripe.css('background-color', getRandomColor());
// }

$('.collection div').hover(
  function () {
    // $('.collection div').css('flex', '1')
    // $(this).css('flex', '150')
    // $(this).text('the glow')

    let randomColor = getRandomColor();

    $(this).css({
      flex: 400,
      transition: 'flex 0s ease-in-out',
      background: getRandomGradientColor(randomColor),
    });
  },

  function () {
    $(this).css({
      flex: 1,
      transition: 'flex 1s ease-in-out',

      background: getRandomGradientColor('red')
    });
  }
)