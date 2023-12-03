import styled from "styled-components";
import {movies} from "../api";
import Card from "../components/card";
import '../App.css';
import { useMatch } from "react-router-dom";
import {Modal} from '../components/modal';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export function Movies(props){
    const isMatch = useMatch("/movies/:id");
    const theId =
      isMatch?.params.id &&
      movies.results.find((movie) => movie.id + "" === isMatch.params.id);



    return ( 
    <>
      {isMatch? (<Modal 
        photo = {theId.poster_path}
        title = {theId.title}
        overview = {theId.overview}
        average = {theId.vote_average}
      />):null
      }   

      <Wrapper>
          {movies.results.map((movie, index)=>(//-
            <Card 
              id={movie.id}
              over={movie.overview} 
              poster={movie.poster}
              title={movie.title}
              vote_average={movie.vote_average}
              poster_path={movie.poster_path}
              index={index}  />
          ))}
      </Wrapper>
    </>
      );
}

