import React from 'react';
import styled from "styled-components";

const Container = styled.div`
      height: 100%;
      overflow-y: scroll;
      background: ${({ theme }) => theme.bg};
      padding: 30px 30px;
      padding-bottom: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      @media (max-width: 768px) {
        padding: 6px 10px;
      }
`;

const Wrapper = styled.div`
      flex: 1;
      height: fit-content;
      width: 100%;
      max-width:1200px;
      gap: 8%;
      padding: 32px 0px;
      display: flex;
      justify-content: center;

      @media (max-width: 768px) {
        flex-direction: column;
      }
`;

const CreatePost = () => {
  return (
    <Container>
      <Wrapper> 
        Create Post
      </Wrapper>
    </Container>
  )
};

export default CreatePost;