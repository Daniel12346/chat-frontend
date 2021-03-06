import { gql } from "@apollo/client";
import { UserDetails, MessageDetails, ChatDetails } from "./fragments";

export const LOGIN_MUTATION = gql`
  mutation logIn($email: String!, $password: String!) {
    #returns a jwt (string)
    #todo: refactor auth data (return user data)
    logIn(email: $email, password: $password)
  }
`;
/*
export const LOGOUT_MUTATION = gql`
  mutation {
    logOut {
      success
    }
  }
`;
*/
export const SIGNUP_MUTATION = gql`
  mutation signUp(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      ...UserDetails
    }
  }
  ${UserDetails}
`;

export const CREATE_MESSAGE_MUTATION = gql`
  mutation createMessage($chatId: ID, $content: String) {
    createMessage(chatId: $chatId, content: $content) {
      ...MessageDetails
    }
  }
  ${MessageDetails}
`;

export const CREATE_CHAT_MUTATION = gql`
  mutation createChat($userId: ID) {
    createChat(userId: $userId) {
      ...ChatDetails
    }
  }
  ${ChatDetails}
`;

export const UPLOAD_IMAGE_MUTATION = gql`
  mutation uploadImage($file: Upload){
    uploadImage(file: $file){
      success
    }
  }
`
export const ADD_USER_TO_CHAT_MUTATION = gql`
  mutation addUserToChat($userId: ID, $chatId: ID){
    addUserToChat(userId: $userId, chatId: $chatId){
    id
    name
    createdAt
    users {
       id
    }
    }
  }
`
export const REMOVE_USER_FROM_CHAT = gql`
  mutation removeUserFromChat($userId: ID, $chatId: ID){
    removeUserFromChat(userId: $userId, chatId: $chatId){
     id
      name
      createdAt
      users {
       id
      }
     
    }
  }
`