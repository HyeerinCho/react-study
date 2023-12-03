import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//border을 줘서 보기 편하게한 다음

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  align-items: center;
  margin-right: 30px;
  margin-left: 30px;

`;

const Overlay = styled.div`
  position: absolute;
  margin-top: 25px;
  width: 200px;
  height: 300px;

  z-index: 1;
`;

const Overview = styled.div`
  position: absolute;    //지정 시, 사용가능한 것, top left right bottom(상대위치)
  color: #EDF2F4;
  background-color: rgba( 0, 0, 0, 0.7 );
  padding: 10px;
  text-align: justify;

  height: 285px;

  overflow-y: auto;
`; 

const Poster = styled.img`
  position: relative;
  text-align: center;
  
  width: 200px;
  height: 300px;
  margin: 10px;
  padding: 15px;
  border: 4px solid #778DA9;
`;

const vote_avg = {
  color: "#EF233C"
}

const Title = styled.h2`
  color: #EDF2F4;
`;

const Text = styled.div`
  margin: 10px 0px 30px 0px;
  padding: 0;
  text-align: center;
  font-size: 12px;
  width: 200px;

  border-top: 3px solid #778DA9;
  border-bottom: 3px solid #778DA9;
`;

export default function Card(props) {
    const [isVisible, setIsVisible] = useState(-1); //setter함수 setIsVisible
    const navigate = useNavigate();
    const whileHover = (index) => {//-
      setIsVisible(props.index);
    };
  
    const whileLeave = () => {
      setIsVisible(-1);
    };

    const onCardClick = () => {
      navigate(`${props.id}`);
    }

    return (
    <Box
        onMouseOver={()=>whileHover(props.index)}//-
        onMouseLeave={whileLeave}
        key={props.id}
        onClick={onCardClick}
      >
        <Overlay>
            {isVisible===props.index ? <Overview className="ov">{props.over}</Overview> : null } {/*overlay로 만들기*/}
        </Overlay>
        <Poster src={`https://image.tmdb.org/t/p/w200/${props.poster_path}`}/> 
        <Text>
          <Title>{props.title}</Title>
          <h3 style={vote_avg}>⭐{props.vote_average}</h3>
        </Text>
    </Box>
      )        
}