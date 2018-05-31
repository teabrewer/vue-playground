```json
{
  "name": "프로젝트의 이름",
  "description": "프로젝트의 간단한 설명",
  "version": "프로젝트의 버전을 기입",
  "author": "작성자를 기입",
  "license": "라이센스를 기입",
  "private": true,
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
  },
  "dependencies": {
    "운영 단계에서 필요한 의존성 모듈"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ],
  "devDependencies": {
    "개발 단계에서 필요한 의존성 모듈"
  }
}
```

## Name
프로젝트의 이름을 적는 곳으로서, 만약 node package에 직접 만든 패키지를 등록하려고 한다면 version과 마찬가지로 필수로 입력해주어야 한다. 다만 그렇지 않다면 해당 값은 선택값이다. 한 블로그에서 해당 값이 없으면 설치가 되지 않는다고 되어 있으나, 실제 테스트를 해보니 설치되는 것을 확인 했다. version과 name은 함께 해당 프로젝트의 유니크한 값이 된다.

### Name 작성법
- 이름은 214 이하의 글자로 작성되어야 한다.
- 이름은 점(.)이나 언더스코어(_)으로 시작될 수 없다.
- 대문자를 포함하면 안된다.
- 이름은 폴더의 이름과, 커맨드 라인의 인자, 그리고 URL의 일부가 됨으로, `non-URL-safe` 를 포함할 수 없다.

### Name 작성팁
- core 노드 모듈과 같은 이름을 사용하지 않는다.
- 'JS'나 'Node' 라는 단어를 이름으로 사용하지 않는다. package.json을 작성하기 전에 이미 js라는 것을 알 수 있으며, `engines` 영역에 engine에 대해서 정의할 수 있다.
- 이름은 require()의 인자로 사용되므로, 짧게 작성하되 직관적이어야 한다.
- 만약 해당 모듈의 이름이 등록되었는지 확인하려면 [https://www.npmjs.com/](https://www.npmjs.com/) 에서 확인 할 수 있다.

## description
프로젝트에 대한 설명을 문자열로 입력한다. 여기에 작성한 대로 `npm search` 명령어를 사용했을 때, 사람들로 하여금 해당 모듈을 찾을 수 있게 도와준다.


## Version
만약 해당 모듈을 npm에 올릴 계획이 있다면 위에서 이야기했듯, name과 version은 필수 값이다. name과 version은 함께 해당 모듈이 unique 하다는 것을 나타낼 수 있다. 해당 package가 변경되면, version 역시 함께 변경되어야 한다. 만약에 해당 패키지를 npm에 올릴 생각이 없다면 해당 필드 역시 선택이다.


## Author
해당 값은 한명의 사람에 대해서 나타낸다. 대신 `contributors`값은 array 형태로 여러명을 기입할 수 있다. 그리고 그 하나의 Person에 대해서는 name을 입력할 수 있으며 선택값으로 email과 url을 입력할 수 있다. 

```json
{
  "author": {
    "name" : "Martin",
    "email" : "martin@within.com",
    "url" : "http://blog.martinwork.co.kr/"
  }
}
```

혹은 아래와 같이 기술하더라도 npm 자체에서 해석할수 있다.
```json
{
  "author": "martin <martin@within.co.kr> (http://blog.martinwork.co.kr/)"
}
```

## license
해당 필드에는 해당 모듈에 대한 라이센스에 대한 정보를 기술하는 영역으로서, 만약 해당 모듈이 npm에 올라갔을 경우 해당 모듈을 사용할 수 있는 권한에 대한 내용을 기술하는 영역이다.

## private
만약 개발자가 해당 옵션을 true로 설정한다면, 해당 모듈을 npm에 올릴 수 없다. 해당 옵션은 개발자가 실수로 private한 모듈을 올리더라도 올린 모듈에 대해 배포를 막을 수 있는방법 중 하나이다.
만약 내부적으로만 사용한다던지와 같은 특정 상황에서만 배포되는 모듈인 경우, `publishConfig`를 이용한다면 등록되는 config를 덮어쓸수 있다(overriding).

## scripts
이 프로퍼티는 패키지의 다양한 생명주기 동안 실행되는 명령어를 포함하고 있다. key는 생명주기 이벤트를 나타내며, value는 해당 생명주기에 실행되는 명령어를 나타낸다.
개발자가 직접 정의한 script의 경우, run과 함께 사용하면 되고, 기본적으로 npm에서 제공되는 명령어는 그냥 해당 명령어만 실행시켜주면 된다.

```bash
# 개발자가 정의한 명령어 
$ npm run dev
# 기본적으로 제공되는 명령어
$ npm install
``` 

## dependencies
이 프로퍼티는 현재의 패키지가 의존하고 있는 모듈들에 대한 리스트를  보여주며, 각자의 모듈의 이름과 버전 범위에 대해서 나타낸다. 버전 범위는 하나의 버전을 가르킬 수 도 있으며 혹은 range 범위 안에 포함될 수도 있다. 이 프로퍼티는 tarball 혹은 git url으로 정의될 수 있다. transpiler나 테스트 관련 모듈을 `dependencies`에 포함시키면 안된다. 

### dependencies version 표기법
package.json에 표기되는 version은 다음과 같다.

| 표기                | 설명
| :---               | :---
| version            | version 과 일치.
| &gt;version        | 명시한 version보다 높아야함 
| &gt;=version       | 명시한 version보다 높거나 같아야함
| &lt;version        | 명시한 version보다 낮아야함
| &lt;=version       | 명시한 version보다 낮거나 같아야함
| ~version           | version 과 근사한 버전.
| ^version           | version 과 호환되는 것.
| 1.2.x              | 1.2.0, 1.2.1, 등등. 1.3.0은 제외
| *                  | 모든 버전
| ""                 | * 와 같음
| version1 - version2| &gt;= version1 &lt;= version2 과 같음.
| range1 \|\| range2 | range1 또는 range2

아래의 예제 모두다 유효한 설정이다.
```json
{ 
  "dependencies" :
    { 
      "foo" : "1.0.0 - 2.9999.9999"
      , "bar" : ">=1.0.2 <2.1.2"
      , "baz" : ">1.0.2 <=2.3.4"
      , "boo" : "2.0.1"
      , "qux" : "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0"
      , "asd" : "http://asdf.com/asdf.tar.gz"
      , "til" : "~1.2"
      , "elf" : "~1.2.3"
      , "two" : "2.x"
      , "thr" : "3.3.x"
      , "lat" : "latest"
      , "dyl" : "file:../dyl"
    }
}
```
## devDependencies
만약 누군가가 내가 직접 작업한 모듈을 다른 프로그램에 붙이려고 할 때, 테스트나 문서 작성에 사용하는 프레임워크는 필요하지 않을 수 있다. 이 상황에서 제일 좋은 것이 그러한 모듈들은 `devDependencies` 안에 추가해주면 된다. 이 안에 있는 모듈들은 프로젝트의 루트에서 `npm install`이나 `npm link` 를 실행하게 되면 설치 된다. 

평소에 그래서 dependencies와 devDependencies를 구분하는 단계를 쉽게 엔드 유저에게 제공되는 모듈이냐 아니면 개발 단계에서만 사용하는 모듈이냐에 따라 구분하기도 한다. 예를 들어 webpack의 경우 엔드 유저에게 전달되기보단 개발 단계에서 javascript 코드를 빌드해주는 용도로 사용하기에 devDependencies에 추가하는 것이 맞을 것이다.

## browserslist
이 해당 옵션은 `browserslist` 라이브러리에 대한 옵션으로서, 서로 다른 front-end 툴 간에 브라우저의 타겟을 공유하기 위해 사용한다. 다음과 같은 곳에서 사용된다.
* Autoprefixer
* babel-preset-env
* postcss-preset-env
* eslint-plugin-compat
* stylelint-no-unsupported-browser-features
* postcss-normalize 

```json
{
"browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}
```
현재 셋팅한 vue-simple 옵션으로 설치된 환경의 package.json 파일을 살펴보면 위와 같이 되어 있다. 위와 같이 셋팅을 하게 되면 다른 front-end 툴에서 브라우저의 타켓을 자동으로 찾게 된다고 한다. 위의 옵션을 살펴보면 다음과 같다.
* 전세계 사용 통계 속에서 상위 1% 이상 선택(사용)된 브라우저 
* 각 브라우저의 최신 버전 2개
* 8이하의 버전은 호환하지 않음


---

## 출처
- [npm 공식 문서](https://docs.npmjs.com/files/package.json)
