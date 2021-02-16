import React from 'react';
import styled from 'styled-components';
import { CarousselAvis } from '../components';

const data = [
  {
    comment: '"En déposant mon annonce sur Annonces-auto.meilleure-reprise.com j’ai pu vendre ma voiture d’occasion rapidement et sans risques"',
    picture: '/images/25.jpeg',
    name: 'Florence',
    rank: 'Directrice de sex-shop',
  },
  {
    comment: '“ En déposant mon annonce sur Annonces-auto.meilleure-reprise.com j’ai pu vendre ma voiture d’occasion rapidement et sans risques “',
    picture: '/images/19.jpeg',
    name: 'Georges',
    rank: 'CTO',
  },
  {
    comment: '“ En déposant mon annonce sur Annonces-auto.meilleure-reprise.com j’ai pu vendre ma voiture d’occasion rapidement et sans risques “',
    picture: '/images/46.jpeg',
    name: 'David',
    rank: 'Monteur vidéo',
  },
  {
    comment: '“ En déposant mon annonce sur Annonces-auto.meilleure-reprise.com j’ai pu vendre ma voiture d’occasion rapidement et sans risques “',
    picture: '/images/41.jpeg',
    name: 'Jordan',
    rank: 'Directrice de sex-shop',
  },
];

const TitleSection = styled.h2`
    margin: 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 49px;
    color: #353535;
`;
const Section = styled.section`
    height: 470px;
    padding-top: 76px;
    padding-left: 130px;
    padding-right: 130px;
    background-color: rgba(5, 102, 141, 0.1);
`;

const AvisSection = () => <Section>
    <TitleSection>{'Avis clients'}</TitleSection>
    <CarousselAvis items={data} />
</Section>;

export default AvisSection;
