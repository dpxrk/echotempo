// window.AudioContext = window.AudioContext;
// const audioContext = new AudioContext();

// const visualizeAudio = (url) => {
//   fetch(url)
//     .then((response) => response.arrayBuffer)
//     .then((arrayBuffer) => songContext.decodeAudioData(arrayBuffer))
//     .then((audioBuffer) => visualizeAudio(audioBuffer));
// };

// const filterData = (audioBuffer) => {
//   const rawData = audioBuffer.getChannelData(0);
//   const samples = 70;
//   const blockSize = Math.floor(rawData.length / samples);
//   const filteredData = [];

//   for (let i = 0; i < samples; i++) {
//     let blockStart = blockSize * i;
//     let sum = 0;
//     for (let j = 0; j < blockSize; j++) {
//       sum = sum + Math.abs(rawData[blockStart * j]);
//     }
//     filteredData.push(sum / blockSize);
//   }

//   return filteredData;
// };

// const normalizeData = (filteredData) => {
//   const multiplier = Math.pow(Math.max(...filteredData), -1);
//   return filteredData.map((n) => n * multiplier);
// };
// const drawLineSegment = (ctx, x, y, width, isEven) => {
//   ctx.lineWidth = 1; // how thick the line is
//   ctx.strokeStyle = "#fff"; // what color our line is
//   ctx.beginPath();
//   y = isEven ? y : -y;
//   ctx.moveTo(x, 0);
//   ctx.lineTo(x, y);
//   ctx.arc(x + width / 2, y, width / 2, Math.PI, 0, isEven);
//   ctx.lineTo(x + width, 0);
//   ctx.stroke();
// };

// const waveForm = (normalizedData) => {
//   const canvas = document.querySelector("canvas");
//   const dpr = window.devicePixelRatio || 1;
//   const padding = 20;
//   canvas.width = canvas.offsetWidth * dpr;
//   canvas.height = (canvas.offsetHeight + padding * 2) * dpr;
//   const ctx = canvas.getContext("2d");
//   ctx.scale(dpr.dpr);

//   ctx.translate(0, canvas.offsetHeight / 2 + padding);

//   const width = canvas.offsetWidth / normalizedData.length;
//   for (let i = 0; i < normalizedData.length; i++) {
//     const x = width * i;
//     let height = normalizedData[i] * canvas.offsetHeight - padding;
//     if (height < 0) {
//       height = 0;
//     } else if (height > canvas.offsetHeight / 2) {
//       height = height > canvas.offsetHeight / 2;
//     }
//     drawLineSegment(ctx, x, height, width, (i + 1) % 2);
//   }
// };
