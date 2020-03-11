# apollo_graphql_category_manager
### 카테고리 항목 관리(상품 및 즐겨찾기 목록, 관리자 페이지에 활용가능)<br>
-using apollo client, apollo react-hooks,graphql, develop category modulization<br>
-grahpql engine = _hasura_ 이용<br/>
-end point : https://apollo-category.herokuapp.com/v1/graphql<br/>
-infinite depth possible(src/Category/components/Item.tsx 주석해제시 무한뎁스 가능, 현재는 대,중,소분류 3depth)
### category table, column 설명<br/>

- id ex) a0:a1 는 기본키,string 값, id로 항목들 구별, 하위항목들은 parent_id 가 상위항목 id임. <br/>
- name 항목이름, <br/>
- status는 'show','hide' string값- show일때 관리자항목에서 보여지고 hide일때 사라짐(하위항목들 보기위한 boolean역할 필드) <br/>
- order 순서 정렬을 위한 필드, 처음 hasura 서버에서 호출시 조건으로 order by order을 하여 순서대로 정렬됨, 순서 바꿈시에도 order값 바뀌게 코
딩됨.<br/>
- active boolean값으로 활성화 안됬을 시에는 사용자 페이지에서 보여지지 않게 하는 목적.<br/>
    id - text, primary key, unique <br/> 
    name - text<br/>
    parent_id - text, nullable<br/>
    status - text, nullable<br/>
    order - integer<br/>
    active - boolean, nullable, default: true<br/>

### hasura란? </br>
    Haskell 기반의 가볍고 빠른 오픈소스 GraphQL 엔진
    Postgres 지원. jsonb 타입 사용 가능
    강력한 Admin 기능
    조회, 추가, 수정, 삭제 화면 제공
    인증, 인가, 이벤트 트리거 등 각종 기능 웹 콘솔 제공
    강력한 Query 기능
    기본 Query + filter, sort, aggregate, paginate, distinct 지원
    filter - eq, neq, gt, lt, Ute, lte, in, min, like, contains, has_key, and, or, .. 지원
    aggregate - count, sum, avg, max, min 지원  
    강력한 Mutation 기능
    Insert, Update, Delete 외에 Upsert 지원
    Upsert - key가 있으면 Update하고 없으면 Insert. 은근 유용
    이벤트 트리거
    JWT 기반 인증 & 인가
    Table View 연동 기능

#### Getting Start 
(터미널에서 아래명령어 입력하여 실행, 오류발생시 하단의 라이브러리 수동입력하여 추가)
- Install Node.js from the Node.js website
- Clone the repo git clone https://github.com/dksxoghl/apollo_graphql_category_manager.git
- Go to your project folder from your terminal
- cd apollo-category-manager
- Run: npm install or yarn install
- After install, run: npm run start or yarn start
- It will open your browser(http://localhost:3000)
- if error occur do 'yarn add(npm install) @apollo/react-hooks apollo-cache-inmemory apollo-client apollo-link-http 
                                           graphql graphql-tag typescript styled-components


#### 추가한 라이브러리
yarn add or npm install<br/>
@apollo/react-hooks apollo-cache-inmemory apollo-client apollo-link-http 
graphql graphql-tag typescript styled-components

### Screenshots

<img src="https://user-images.githubusercontent.com/45805470/75227426-821e9a80-57f1-11ea-9ded-d10f01064c3c.PNG" width="80%"></img>
<div>
<img src="https://user-images.githubusercontent.com/45805470/75227475-982c5b00-57f1-11ea-8676-1953bfe32cab.PNG" width="40%"></img>
<img src="https://user-images.githubusercontent.com/45805470/75227477-995d8800-57f1-11ea-91c3-9818713635ae.PNG" width="40%"></img>
</div>


- example json data : </br>

<img src="https://user-images.githubusercontent.com/45805470/75227619-d9bd0600-57f1-11ea-89f2-07c35d851f39.PNG" width="60%"></img></br>


- rollback design(branch feature_rollback) : (u can go back to this design)
<img src="https://user-images.githubusercontent.com/45805470/75227877-5d76f280-57f2-11ea-9bbd-9a902192b158.PNG" width="60%"></img>



