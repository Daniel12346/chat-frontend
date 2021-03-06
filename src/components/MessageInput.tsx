import React, { useState, FormEvent } from "react";
import { useCreateMessageMutation } from "graphql/types";
import styled from "styled-components";

interface Props {
  chatId: string;
}

export default function MessageInput({ chatId }: Props) {
  const [createMessage, { error }] = useCreateMessageMutation();

  const [content, setContent] = useState("");
  const handleSendMessage = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    createMessage({ variables: { content, chatId } });
    setContent("");
  };
  console.log(error);
  return (
    <StyledForm onSubmit={handleSendMessage}>
      <input value={content} onChange={e => setContent(e.target.value)} />
      <button type="submit">send</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-flow: row;
  background: ${({ theme }) => theme.colors.primary3};
  position: fixed;
  bottom: 0;
  z-index: 2;
  width: 100%;
  padding: 0.5rem 5%;
  height: 3rem;
  > * {
    height: 100%;
  }
  input {
    flex: 5;
    border-radius: 30px 0 0 30px;
  }
  button {
    flex: 1;
    border-radius: 0 30px 30px 0;
  }

  > * {
  }
`;
