# apollo_graphql_category_manager
--카테고리 항목 관리(상품 및 즐겨찾기 목록, 관리자 페이지에 활용가능)--
using apollo client, apollo react-hooks,graphql, develop category modulization

grahpql engine = hasura 이용
https://apollo-category.herokuapp.com/v1/graphql

category table, column 설명
id ex) a0:a1 는 기본키,string 값, id로 항목들 구별, 하위항목들은 parent_id 가 상위항목id임.
name 항목이름, status는 'show','hide' string값- show일때 관리자항목에서 보여지고 hide일때 사라짐(하위항목들 보기위한 boolean역할 필드)
order 순서 정렬을 위한 필드, 처음 hasura 서버에서 호출시 조건으로 order by order을 하여 순서대로 정렬됨, 순서 바꿈시에도 order값 바뀌게 코딩됨.
active boolean값으로 활성화 안됬을 시에는 사용자 페이지에서 보여지지 않게 하는 목적.
id - text, primary key, unique         
name - text, nullable
parent_id - text, nullable
status - text, nullable
order - integer
active - boolean, nullable, default: true

hasura란? 
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



---추가한 라이브러리---
yarn add
@apollo/react-hooks apollo-cache-inmemory apollo-client apollo-link-http 
graphql graphql-tag --template typescript 
styled-components