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

  // view_문법(html)
  return (
    <div className="App">
      Hello World!
      <Greeting />
      <Greeting />
      {/**미션 : Card 컴포넌트 만들고, 이자리에서 호출 */}
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
