import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

//화면을 그리는 메소드 render -> JSX 문법 사용
// class -> className
// for -> htmlFor
//이벤트 핸들러 문법도 좀 다름 -> camel case로 작성

root.render(
  //JSX에서는 하나의 태그 안에 작성 -> div 태그 없애고 싶으면 Fragment 활용하기 -> 이름을 없앨 수도 있음
  //이름을 없앨 경우 Fragment impot  하지 않아도 됨

  <>
    <App />
  </>
);
