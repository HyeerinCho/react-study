import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.div`
    background-color: #011627;
    padding: 20px;
    margin-bottom: 10px;
    font-size: 20px;
    font-style: bold;
    color: #D90429;

    border-bottom: 2px solid #EE9B00;

    position: fixed;
    width: 100%;
    z-index: 10;
    top: 0;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;


export function Nav(){
    const navigate = useNavigate();
    const onClick = (r) => {
        navigate(`/${r}`);
    }
    
    return (
        <Navigation id="nav">
            <span>🐣99' 스터디</span>
            <span onClick={()=>onClick("")}>🛌Home</span>
            <span onClick={()=>onClick("movies")}>🎬Movies</span>
            <span onClick={()=>onClick("tv")}>📺Tv Program</span>
        </Navigation>
    );
}