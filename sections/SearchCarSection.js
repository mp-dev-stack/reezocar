import React from 'react';
import styled from 'styled-components';

import { DropdownButton, CarousselAnnonces } from '../components';

const data = [
  {
    picture: '/images/senic.jpeg',
    model: 'Renault scenic',
    description: 'familial',
    infos: '2008 - Bon état - 92 456 km',
    area: 'Issy-les-Moulinaux',
    price: '23 390€',
  },
  {
    picture: '/images/golf.jpeg',
    model: 'Volkswagen Golf 6',
    description: 'GTI série limitée',
    infos: '2008 - Bon état - 92 456 km',
    area: 'Issy-les-Moulinaux',
    price: '23 390€',
  },
  {
    picture: '/images/208.jpeg',
    model: 'Peugeot 208 GTI',
    description: 'By Peugeot Sport',
    infos: '2009 - Bon état - 82 132 km',
    area: 'Paris',
    price: '15 280€',
  },
  {
    picture: '/images/serie3.jpeg',
    model: 'Bmw M3',
    description: '',
    infos: '2012 - Bon état - 22 456 km',
    area: 'Issy-les-Moulinaux',
    price: '31 000€',
  },
  {
    picture: './images/cla.jpeg',
    model: 'Mercedes CLA',
    description: '',
    infos: '2016 - Bon état - 62 456 km',
    area: ' Aix-en-Provence',
    price: '42 110€',
  },
  {
    picture: '/images/clio.jpeg',
    model: 'Renault CLio',
    description: '1.2 Dci 90',
    infos: '2008 - Bon état - 102 456 km',
    area: 'Boulogne-Billancourt',
    price: '5 360€',
  },
  {
    picture: '/images/megane.jpeg',
    model: 'Renault Megane',
    description: '',
    infos: '2014 - Bon état - 92 456 km',
    area: 'Nancy',
    price: '8 000€',
  },

];
const Section = styled.section`
    boxing-size: border-box;
    min-height: 800px;
    padding: 81px 130px 0 130px;
    .head_section {
        display: flex;
    };
    .title_section {
        width: 765px;
    };
    .filter_section{
        margin-left: auto;
    }
    `;

const Title = styled.h2`
    font-family: Montserrat;
    font-weight: 700;
    font-size: 40px;
    line-height: 36px;
    color: #494949;
    span {
    color: ${(props) => props.theme.palette.primary.main}
    }`;

const SubTitle = styled.p`
    margin-top: 25px;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #494949;
    span {
        font-weight: 600;
    };
    
`;

const SearchCarSection = () => <Section>
    <div className={'head_section'}>
        <div className={'title_section'}>
            <Title>Les dernières annonces <span>publiées</span></Title>
            <SubTitle>{'Ils nous font confiance, nous avons '}
            <span>inspecté</span>{" leur véhicule avant de vous proposer ces annonces, acheter une voiture d'occasion à un particulier "}
            <span>en toute sécurité</span>{" contrôle technique OK, carnet d'entretient et révisions à jour, Mécanique et carrosserie en bon état"}
            </SubTitle>
        </div>
        <div className={'filter_section'}>
            <DropdownButton selectedValue={'Les modèles les plus vus'}/>
        </div>
    </div>
    <CarousselAnnonces items={data}/>
</Section>;

export default SearchCarSection;
