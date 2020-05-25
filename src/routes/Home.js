import React from 'react';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components;'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    aling-itmes: center;
    width: 100%;
`;

const Header = styled.header`
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
    height: 45vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 35px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const GET_MOVIES = gql`
    {
        movies {
            id
            poster
        }
    }
`;

export default () => {
    const { loading, error, data } = useQuery(GET_MOVIES);
    if (loading) {
        return 'loading...';
    }
    if (data && data.movies) {
    return data.movies.map(m => <h1>{m.id}</h1>);
    }
};