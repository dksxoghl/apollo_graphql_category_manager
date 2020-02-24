import gql from "graphql-tag";

export const DELETE_CATEGORY = gql`
mutation MyMutation2($id: String!) {
  delete_categories(id: $id)
  @rest(
    type:"categories2",  path:"category/{args.id}",
    method:"DELETE"
  ) {
    id
  }
}
`;
// export const DELETE_CATEGORY = gql`
// mutation MyMutation2($id: String!) {
//   delete_categories(where: {_or: [{id: {_eq: $id}}, {parent_id: {_eq: $id}}]})
//   @rest(
//     type: "categories2", path: "category/{id}",
//     method: "DELETE"
//   ) {
//     id
//   }
// }
// `;

export const GET_CATEGORY = gql`
query MyQuery {
  categories @rest(type: "categories2", path: "category/list") {
    id
    name
    order
    parent_id
    status
    active
  }
}
`

// export const GET_CATEGORY = gql`
// query MyQuery {
//   __typename
//   categories(order_by: {order: asc}) {
//     id
//     name
//     order
//     parent_id
//     status
//     active
//   }
// }
// `
export const UPDATE_CATEGORY = gql`
mutation MyMutation($id: String!,$name:String!,$parent_id:String, $order:Int!,$status:String!,$active:Boolean) {
  update_categories(body:{id: $id,name: $name, parent_id: $parent_id, order: $order,status:$status,active:$active})
  @rest(
    type: "categories2", path: "category/{id}", bodyKey: "body"
    method: "PUT"
  ){
    id
    name
    order
    parent_id
    status
    active
  }
}
`
export const INSERT_CATEGORY = gql`
mutation MyMutation3($id: String!,$name:String!,$parent_id:String, $order:Int!,$status:String!,$active:Boolean) {
  insert_categories(body:{id: $id,name: $name, parent_id: $parent_id, order: $order,status:$status,active:$active})
  @rest(type:"categories2", path: "category", method: "POST",bodyKey: "body"
  )  {
    id
    name
    order
    parent_id
    status
    active
  }
}
`;
// bodyKey:"id",bodyKey:"name",bodyKey:"order",bodyKey:"parent_id",bodyKey:"status",bodyKey:"active"
// type PublishablePostInput={
//   id: String, name:String, parent_id:String, order:Number, status:String, active:Boolean
// }
// fragment PublishablePostInput on REST {
//   id: String name:String parent_id:String order:Int status:String active:Boolean
// }
// export const INSERT_CATEGORY = gql`

// mutation MyMutation3( $someApiWithACustomBodyKey: PublishablePostInput!  $customBuilder: any) {
//   insert_categories:publish(someApiWithACustomBodyKey: $someApiWithACustomBodyKey)
//   @rest(type: "categories2" path: "category" method: "POST"
//   bodyBuilder:$customBuilder)  {
//     id
//     name
//     order
//     parent_id
//     status
//     active
//   }
// }
// `;



