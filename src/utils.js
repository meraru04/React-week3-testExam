export const waitTwoSeconds = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("2초 뒤 실행");
      resolve();
    }, 2000);
  });
