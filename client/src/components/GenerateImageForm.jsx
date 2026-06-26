import React from "react";
import styled from "styled-components";
import Button from "./buttons/button";
import TextInput from "./Inputs/TextInput";
import { AutoAwesome, CreateRounded } from "@mui/icons-material";

const Form = styled.div`
    flex: 1;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 9%;
    justify-content: center;
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const Title = styled.h1`
    font-size: 28px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.p`
    font-size: 17px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
`;

const Actions = styled.div`
    flex: 1;
    display: flex;
    gap: 8px;
`;

const GenerateImageForm = ({
        createPostLoading,
        setcreatePostLoading,
        generateImageLoading,
        setGenerateImageLoading,
        post,
        setPost,
}) => {
    const generateImageFun = () => {
        setGenerateImageLoading(true);
    };
    const createPostFun = () => {
        setcreatePostLoading(true);
    };
    return (
        <Form>
            <Top>
                <Title>Generate Image With Prompt</Title>
                <Desc>Write a Prompt Accroding to the image you want to generate</Desc>
            </Top>
            <Body>
                <TextInput 
                    label="Author"
                    placeholder="Enter your name..."
                    name="name"
                    value={post.name}
                    handleChange={(e) => setPost({ ...post, name: e.target.value })}
                />
                <TextInput 
                    label="Prompt"
                    placeholder="Enter your prompt..."
                    name="name"
                    rows="8"
                    textArea
                    value={post.prompt}
                    handleChange={(e) => setPost({ ...post, prompt: e.target.value })}
                />
                **You Can Post the Ai Generated Image to the Community**
            </Body>
            <Actions>
               <Button text="Generate Image" leftIcon={<AutoAwesome />} flex isLoading={generateImageLoading} isDisabled= {post.prompt === ""} onClick={()=>generateImageFun()}/>
               <Button text="Post Image" leftIcon={<CreateRounded />} flex type="secondary" isLoading={createPostLoading} isDisabled={post.name === "" || post.prompt === "" || post.photo === ""} onClick={()=>createPostFun()}/>
            </Actions>
        </Form>
    );
};

export default GenerateImageForm;