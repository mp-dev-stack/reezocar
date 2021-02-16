import React from 'react';
import styled from 'styled-components';
import {
  HeaderBar, Logo, HeaderBarLink, HeaderNav, InputFormText, InputFormSearch, ButtonSubmitForm,
} from '../components';

const Header = styled.header`
    width: 100%;
    min-height: 860px;
    background-image: url("/images/header.jpeg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;`;

const HeaderContent = styled.div`
    margin-top: 122px;
    margin-left: 144px;
    `;

const HeaderBarStyled = styled(HeaderBar)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 131px;
    padding-right: 130px
    `;

const Menu = styled.div`
    display: flex;
    align-items: center;
    `;

const HeaderTitle = styled.h1`
    font-family: Montserrat;
    font-size: 54px;
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 80px;
    color: ${(props) => props.theme.palette.grey.main};
    span:nth-child(2) {
        color: ${(props) => props.theme.palette.primary.main};
    };
    span:nth-child(3) {
        color: ${(props) => props.theme.palette.secondary.main};
    };
    `;

const HeaderSubtitle = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: ${(props) => props.theme.palette.grey.main};
    `;

const HeaderFormSearch = styled.form`
display: flex;
align-items: center;
margin-top: 44px;`;

const HeaderSection = () => <Header>
    <HeaderBarStyled>
         <Logo />
         <Menu>
             <HeaderNav />
             <HeaderBarLink>Vendre ma voiture</HeaderBarLink>
         </Menu>
    </HeaderBarStyled>
    <HeaderContent>
        <HeaderTitle>
            {'Concessionnaire en ligne spécialiste'}
            <br />
            {'de '}
            <span>{"l'achat"}</span>
            {' et de la '}
            <span>vente</span>
            {" de voitures d'occassion"}
        </HeaderTitle>
        <HeaderSubtitle>
            {'Trouver une petite annonce de annonce de voiture d\'occasion près de chez vous ou partout en France :'}
        </HeaderSubtitle>
        <HeaderFormSearch>
            <InputFormText label={'Quel vehicule recherchez-vous ?'} defaultValue={'Peugeot 308 GTI'}/>
            <InputFormSearch label={'Ville, département'} placeholder={'Ex: Paris (75)'}/>
            <ButtonSubmitForm>
                Rechercher
            </ButtonSubmitForm>
        </HeaderFormSearch>
    </HeaderContent>
</Header>;

export default HeaderSection;
