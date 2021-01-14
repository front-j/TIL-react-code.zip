# react-icons

React 개발 환경에서 icon을 쉽게 불러와 사용할 수 있다.

## How to use

홈페이지: [react-icons.github.io](https://react-icons.github.io/react-icons/)

1. 라이브러리 설치 - yarn: `yarn add react-icons` / npm: `npm install react-icons`
2. 홈페이지에서 원하는 icon의 import 코드를 가져온다.

```javascript
import { DiAndroid } from "react-icons/di";
```

3. 원하는 곳에 불러와서 사용

```javascript
<div>
  <DiAndroid />
</div>
```

4. 아이콘의 크기나 스타일을 바꿔줄 때

```javascript
<DiAndroid size="2em" style={{ fill: "blue", verticalAlign: "middle" }} />
```
