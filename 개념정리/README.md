# React 개념 정리

- ## shouldComponentUpdate
shouldComponentUpdate 함수의 반환값에 따라서 리렌더링 여부를 결정한다.   
이전에 렌더링 된 엘리먼트와 비교하여 리렌더링의 여부를 결정할 수 있다. (**성능의 최적화**)   
render함수 위에 작성해준다.

`return true`는 shouldComponentUpdate 함수 호출 후 리렌더링, `return false`는 리렌더링 하지 않음

<br>

```javascript
shouldComponentUpdate(nextProps, nextState){
  if (this.props.data === nextProps.data) {
      return false;
    }
    return true;
};
```

첫번째 인자(nextProps)로 바뀐 props값을 알 수 있고, 두번째 인자(nextState)로 바뀐 state값을 알 수 있다.   
`this.props.data`는 바뀌기 전 데이터를 나타내므로, `this.props.data === nextProps.data`는 데이터의 변경이 없음을 의미한다.
따라서 *데이터의 변경이 없으면* 리렌더링을 하지 않고, *데이터의 변경이 있을 경우*만 리렌더링을 해주어 성능을 향상시킨다.
