// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

for (let i = 0; i <= 100; i++) {
  const div = $('<div>', {
    class: `stripe${i}`,
  });

  // div.css('background-color', getRandomColor());
  div.css('background-color', getVibrantColor());
  // div.css('background-color', getBnw());
  $('.collection').append(div);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color);
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

$('.collection div').hover(function () {
  $('.collection div').css('flex', '1')
  $(this).css('flex', '50')
  // $(this).text('the glow')
})