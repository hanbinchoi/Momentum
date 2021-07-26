# momentum

**This is Momentum clone program.**

**Momentum is chrome's expension program.**

### **Function**

- **background.js**

  img폴더 안에 이미지들을 랜덤으로 선택하여 배경으로 지정

  투명도 0.4로 설정하여 전체적으로 어두운 배경으로 변환한다.

- **Weather.js**

  현재 PC의 위치를 기준으로 openweathermap API를 불러온다.

  fetch를 통해 api를 호출하여 도시, 날씨, 온도 등의 정보 가져옴.

- **quotes.js**

  오브젝트 변수 안에 quote와 author가 저장되어 있음.

  페이지 새로고침 시 마다 랜덤하게 quote와 author를 지정.

- **todo.js**

  form 안에 input을 통해 값이 들어오면, 현재 시간을 기준으로 key를 생성하여 localStorage안에 value로 저장.

  새로고침 시, localStorage에 값이 있으면 localStorage의 데이터들을 어레이로 변환 후 화면에 출력해줌.

  값을 삭제할 시, 생성된 key를 통해 중복없이 제거, localStorage 데이터도 마찬가지로 제거한다.

- **clock.js**

  Date 오브젝트를 이용하여 현재 시간을 화면에 출력

- **greetimg**

  사용자 이름, todo(할 일)을 input태그로 입력받으면, 해당하는 문구를 화면에 출력함.

  사용자 이름을 입력하면 input하는 공간 대신 hello (이름)! 이라는 문구로 대체되며, localStorage에 저장하여 새로고쳐도 다시 입력할 필요가 없음.

### [URL](https://hanbinchoi.github.io/momentum/)
