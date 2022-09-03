const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");

function boxToMove(currentPosition, targetPosition) {
  return {
    x: targetPosition.x - currentPosition.getBoundingClientRect().left,
    y: targetPosition.y - currentPosition.getBoundingClientRect().top,
  };
}

const redBoxTarget = boxToMove(redBox, { x: 20, y: 300 });
const blueBoxTarget = boxToMove(blueBox, { x: 400, y: 300 });
const greenBoxTarget = boxToMove(greenBox, { x: 400, y: 20 });

async function translateOneByOne() {
  try {
    await moveElement(redBox, redBoxTarget).then(() => {
      console.log("Element red has been moved!");
    });
    await moveElement(blueBox, blueBoxTarget).then(() => {
      console.log("Element blue has been moved!");
    });
    await moveElement(greenBox, greenBoxTarget).then(() => {
      console.log("Element green has been moved!");
    });
  } catch (err) {
    console.log(err);
  }
}

translateOneByOne();
//translateAllAtOnce();

async function translateAllAtOnce() {
  await Promise.all([
    moveElement(redBox, redBoxTarget),
    moveElement(blueBox, blueBoxTarget),
    moveElement(greenBox, greenBoxTarget),
  ]).then(() => {
    console.log("All boxes has been moved!");
  });
}
