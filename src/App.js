//(삭제) import logo from "./logo.svg";
//(삭제) import "./App.css";

import Card from "./components/Card";
import Greeting from "./components/Greeting";

function App() {
  // logic_로직
  // 구조분해할당 - object destructuring
  const animals = ["dog", "cat", "pig"];
  // const second = animals[1];
  // const first = animals[1];

  const [first, second] = animals;
  console.log("🚀 ~ App ~ first:", first);
  console.log("🚀 ~ App ~ second:", second);

  const todoItem = {
    todo: "학습하기",
    isComplete: false,
  };

  const { todo: todoName, isComplete } = todoItem;
  console.log("🚀 ~ App ~ isComplete:", isComplete);
  console.log("🚀 ~ App ~ todo:", todoName);

  const handleButtonClick = (data) => {
    console.log("cllick!!!", data);
  };

  // view_문법(html)
  return (
    <div className="App">
      Hello World!
      <Greeting />
      {/**미션 : Card 컴포넌트 만들고, 이자리에서 호출 */}
      <Card
        imgUrl={
          "https://cf.product-image.s.zigzag.kr/original/d/2026/8/24/2833_202608241452280370_67109.jpeg?width=720&height=720&quality=80&format=webp"
        }
        itemName={"111"}
        onButtonClick={handleButtonClick}
      />
      <Card
        imgUrl={
          "https://cf.product-image.s.zigzag.kr/original/d/2026/9/8/2833_202609081141205996_45671.jpeg?width=720&height=720&quality=80&format=webp"
        }
        itemName={"222"}
        onButtonClick={handleButtonClick}
      />
      <Card
        imgUrl={
          "https://cf.product-image.s.zigzag.kr/original/d/2026/9/15/11864_202609150926561139_52417.jpeg?width=720&height=720&quality=80&format=webp"
        }
        itemName={"333"}
        onButtonClick={handleButtonClick}
      />
    </div>
  );
}

export default App;
