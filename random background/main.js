let hexColor = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colorRes = [];
for (let i = 0; i < 6; i++) {
  colorRes.push(hexColor[Math.trunc(Math.random() * hexColor.length)]);
}
document.body.append(`#${colorRes.join("")}`);
document.body.style.backgroundColor = `#${colorRes.join("")}`;
