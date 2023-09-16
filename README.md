# spa-router

![main-image](https://cdn.discordapp.com/attachments/1142343767941201923/1152512969062760539/screely-1694850891485.png)

## 🧤 프로젝트 소개

이 프로젝트는 React와 History API 사용하여 SPA Router 기능을 직접 구현해보고
SPA Router가 어떻게 동작하는지 이해해보기 위해 시작하였습니다

- **링크**: [배포사이트](https://idyllic-kheer-583c6d.netlify.app)
- **사용스택**: `vite`, `typescript`

<br>

## 🎯 구현사항

### route-module 폴더

- Router, Routes, Route 컴포넌트를 담은 components.tsx 파일이 있습니다
- useRouter hooks를 담은 hooks.tsx파일이 있습니다.
- Router 컴포넌트에서 Context API를 활용하기 위한 context.ts파일을 생성했습니다.
- 폴더구조와 파일명은 React-router 깃헙레포를 참고했습니다.

<br>

### Router 컴포넌트

- 현재 사이트의 pathname 정보를 state로 가지고 있습니다.
- Context API를 통해서 하위 컴포넌트에게 path와 changePath함수를 전달합니다.
- changePath 함수는 setPath함수를 통해서 path를 바꾸고 history.pushState()함수를 사용하여 바뀐 path를 히스토리 스택에 푸쉬하는 기능을 가집니다.
- useEffect를 사용하여 popstate이벤트가 일어나면 setPath함수로 path를 변경합니다.

<br>

### Routes 컴포넌트

- Route컴포넌트를 담고있는 컨테이너입니다.
- Context API를 통해 받은 path정보를 통해 children(Route컴포넌트)을 순회하면서 path와 Route컴포넌트의 props.path와 일치하는 것만 렌더링합니다

<br>

### Route 컴포넌트

- props로 path와 어떤 컴포넌트를 렌더링할지 정보를 가지고 있습니다.

<br>

### useNavigate 훅

- 실행시 함수를 반환하고 이 함수에 path정보를 인수로 전달하면 함수 내부에서는 Context API를 통해 받은 changePath함수에 전달하여 실행시킵니다.

<br>

### Navigate 컴포넌트

- useNavigate를 컴포넌트 처럼 사용할 수 있습니다.
- Route에서 component prop에 Navigate 컴포넌트를 넣어 사용할 수 있습니다

<br>

## ❗️어려웠던점

- React-router 깃헙레포를 참고하면서 만들었는데 레포에는 Context API를 활용하여 구현하고 있어서 한번도 사용해보지 않은 Context API를 공부하는데 시간이 걸렸습니다
- 초반에 popstate 이벤트가 history.pushState()함수를 실행시킬 때는 트리거되지 않는다는 사실을 몰라서 많이 헤매었고 Router 컴포넌트에 path를 state로 두어 해결했습니다
