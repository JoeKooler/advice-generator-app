const adviceNumberText = document.querySelector(".adviceNumber");
const adviceText = document.querySelector(".advice");
const diceButton = document.querySelector(".dice");

const Init = async () => {
  const { id, advice } = await FetchAdvice();
  SetAdviceDOM(id, advice);
  SetDiceOnClick();
};

const FetchAdvice = async () => {
  return await fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => data?.slip);
};

const SetAdviceDOM = (id, advice) => {
  adviceNumberText.innerHTML = `ADVICE #${id}`;
  adviceText.innerHTML = `"${advice}"`;
};

const SetDiceOnClick = () => {
  diceButton.onclick = async () => {
    const { id, advice } = await FetchAdvice();
    SetAdviceDOM(id, advice);
  };
};

Init();
