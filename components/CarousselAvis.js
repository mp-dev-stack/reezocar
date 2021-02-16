import React from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';

const Caroussel = styled.div`
    position: relative;
    margin-top: 42px;
    ul{
        display: flex;
        overflow-x: scroll;
        padding: 0;
        margin: 0;
        width: calc(100% + 130px);
     };
    li {
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 380px;
        list-style: none;
        margin-left: 20px;
     };
     li:first-of-type {
        margin-left: 0
     };
     p {
        margin: 0
     }
`;

const Card = styled.div`
    box-sizing: border-box;
    padding: 25px 32px;
    height: 220px;
    width: 380px;
    display: flex;
    flex-direction: column;
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: 0px 2px 4px ${(props) => props.theme.palette.grey.light};
    background-color: ${(props) => props.theme.palette.white.main}
`;

const Comment = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #353535;
`;

const UserCard = styled.div`
    height: 62px;
    margin-top: auto;
    display: flex;
    align-items: center;
    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        margin-right: 19px;
        }
`;

const UserName = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
`;

const UserRank = styled.p`
    margin-top: 8px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #494949;
`;

const CarousselBtn = styled.button`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    position: absolute;
    top: 78px;
    right: 0;
    z-index: 1;
    background: #FFFFFF;
    box-shadow: 0px 20px 40px rgba(5, 102, 141, 0.1);
    border: none;
    outline: none;
    span {
    }
`;

const CarousselAvis = ({ items }) => <Caroussel>
    <ul>
        { items.map((item) => <li key={item.name}>
            <Card>
                <Comment>{item.comment}</Comment>
                <UserCard>
                    <img src={item.picture} alt={item.name}/>
                    <div>
                        <UserName>{item.name}</UserName>
                        <UserRank>{item.rank}</UserRank>
                    </div>
                </UserCard>
            </Card>
        </li>)}
    </ul>
    <CarousselBtn><img src={'/images/vector2.png'}/></CarousselBtn>
</Caroussel>;

CarousselAvis.propTypes = {
  items: PropTypes.array,
};

CarousselAvis.defaultProps = {
  items: [],
};

export default CarousselAvis;
