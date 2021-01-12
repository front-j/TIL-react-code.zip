# EmailJS

백엔드없이 클라이언트에서 이메일 전송 기능을 쉽게 구현할 수 있는 라이브러리이다.

한 달에 200건의 메일 전송 서비스를 무료로 이용할 수 있다. 


## How to use
홈페이지: [https://www.emailjs.com/](https://www.emailjs.com/)
1. 회원 가입 (계정 생성)
2. 라이브러리 설치 - yarn: `yarn add emailjs-com` / npm: `npm install emailjs-com`
3. [js 코드 참고](https://github.com/front-j/TIL-react-code.zip/blob/master/emailjs/MailForm.js)
4. sendForm에서 [SERVICE_ID], [TEMPLATE_ID], [USER_ID]는 해당되는 개인 key를 넣어준다.
```javascript
  .sendForm(["SERVICE_ID"], ["TEMPLATE_ID"], e.target, ["USER_ID"])
```

　*(USER_ID는 계정 ID가 아니라 Integration 메뉴에서 API key를 확인할 수 있다.)*


5. form에서 input태그의 name속성은 홈페이지의 Email templates에서 {{}}로 감싸준다. ex)`{{message}}`


