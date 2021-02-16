import React from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';

const Caroussel = styled.div`
    position: relative;
    margin-top: 42px;
    ul{
        height: 340px;
        display: flex;
        overflow-x: scroll;
        padding: 0;
        margin: 0;
        margin-left: -130px;
        width: calc(100% + 2 * 130px);
     };
    li {
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 213px;
        list-style: none;
        margin-left: 16px;
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
    padding: 0;
    height: 274px;
    width: 213px;
    display: flex;
    flex-direction: column;
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: 0px 20px 40px rgba(5, 102, 141, 0.1);
    background-color: ${(props) => props.theme.palette.white.main};
    .card_container_picture {
        border-radius: 6px 6px 0 0;
        height: 156px;
        width: 100%;
        background-repeat:no-repeat;
        background-position: center center;
        background-size: cover;
        };    
    .card_container_info {
        p {
            min-height: 20px;
        };
        font-family: Montserrat;
        padding: 5px 20px 0 20px;
        };
    .card_model {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        };
     .card_description {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        };
     .card_info {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        };
     .card_area {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        };
     .card_price {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        };
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

const CarousselAnnonces = ({ items }) => <Caroussel>
    <ul>
        { items.map((item) => <li key={item.name}>
            <Card>
                <div className={'card_container_picture'} style={{ backgroundImage: `url(${item.picture})` }}/>
                <div className={'card_container_info'}>
                    <p className={'card_model'}>{item.model}</p>
                    <p className={'card_description'}>{item.description}</p>
                    <p className={'card_info'}>{item.infos}</p>
                    <p className={'card_area'}>{item.area}</p>
                    <p className={'card_price'}>{item.price}</p>
                </div>
            </Card>
        </li>)}
    </ul>
    <CarousselBtn><img src={'/images/vector2.png'} alt={'vector2'}/></CarousselBtn>
</Caroussel>;

CarousselAnnonces.propTypes = {
  items: PropTypes.array,
};

CarousselAnnonces.defaultProps = {
  items: [],
};

export default CarousselAnnonces;
