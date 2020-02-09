import gql from "graphql-tag";

// export const GET_CATEGORY = gql`
// query MyQuery {
//     __typename
//     categories {
//       id
//       name
//       parent_id
//     }
//   }
// `;

// export const GET_CATEGORY = gql`
// query MyQuery {
//   categories(where: {}, order_by: {id: asc}) {
//     id
//     name
//     parent_id
//     enum_categories_status {
//       value
//     }
//   }
// }
// `
export const GET_CATEGORY = gql`
query MyQuery {
  categories2(where: {}, order_by: {order: asc}) {
    id
    name
    parent_id
    status
    order
  }
}
`
export const GET_SUBCATEGORY = gql`
query MyQuery {
  categories(where: {parent_id: {_eq: "a0"}}) {
    id
    name
    parent_id
  }
}
`;
export const DELETE_CATEGORY =gql`
mutation MyMutation2($id: String!) {
  delete_categories(where: {_or: [{id: {_eq: $id}}, {parent_id: {_eq: $id}}]}) {
    affected_rows
  }
}
`;

// query MyQuery2 {
//   __typename
//   categories(where: {_or: [{id: {_eq: "a0"}}, {id: {_eq: "a1"}}] }) {
//     id
//     name
//     parent_id
//     status
//   }
// }


