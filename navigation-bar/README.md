# 라이브러리를 사용하여 Navigation bar 만들기

React 라이브러리를 사용하여 손쉽게 상단 메뉴 바(Navigation bar)를 만들 수 있다.

## 1. stickyfilljs
스크롤 시 상단에 요소를 고정시킬 때 `position:sticky`를 사용할 수도 있지만 이는 IE에서 지원하지 않는다.   
`stickyfilljs`를 사용하면 IE에서도 sticky 효과를 적용할 수 있다.

홈페이지: [npmjs stickyfilljs](https://www.npmjs.com/package/stickyfilljs)
- 라이브러리 설치 - yarn: `yarn add emailjs-com` / npm: `npm install emailjs-com`
- 라이브러리 불러오기
```javascript
import Stickyfill from "stickyfilljs";
```
- html로 메뉴 바 형태를 만들어 주고 css에 아래 코드 추가
```css
position: -webkit-sticky;
position: sticky;
top: 0;
```
- html로 만든 메뉴를 불러와 `Stickyfill.add()`에 넣어준다.
```javascript
const menu = document.getElementsByClassName("menu");
Stickyfill.add(menu);
```
</br>

## 2. react-scroll
요소를 클릭 했을 때 스크롤 위치를 이동시켜준다. 

홈페이지: [npmjs react-scroll](https://www.npmjs.com/package/react-scroll)
- 라이브러리 설치 `npm install react-scroll`
- 라이브러리 불러오기
```javascript
import { Link } from "react-scroll";
```
- 링크를 넣어줄 부분에 `<Link>`로 감싸주고 `to="이동할 위치"` 를 넣어준다.
```javascript
<div className="menu">
  <div>
    <Link to="about" smooth={true}>ABOUT</Link>
  </div>
  <div>
    <Link to="contact" smooth={true}>CONTACT</Link>
  </div>
</div>
```
`smooth={true}`를 넣어주면 스크롤이 부드럽게 이동한다.
