// show hello world alert
// const helloWorld = (currentTime: string): void => {
//   alert(`The time now is ${currentTime}`);
// };

// // wait 2 seconds and then show hello world alert
// setTimeout(() => {
//   const currTime = new Date().toLocaleTimeString();
//   helloWorld(currTime);
// }, 2000);

const compatibilityCheckLabel: HTMLElement = document.getElementById(
  "compatibility-check-label"
) as HTMLElement;

if (navigator.gpu) {
  compatibilityCheckLabel.innerText = "GPU is supported";
} else {
  compatibilityCheckLabel.innerText = "GPU is not supported";
}
