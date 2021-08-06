/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import P from 'prop-types';
import { Container } from './styles';

export function BoxRepo({ title, owner, language }) {
  return (
    <Container>
      <div className="repo-owner">
        <h2>{title}</h2>
        <h3>{owner}</h3>
      </div>
      <div className="language">
        <h4>
          Linguagem:
          {' '}
          {language === null ? '' : language}
        </h4>
      </div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.074 2.633C11.394 1.789 12.605 1.789 12.926 2.633L14.996 8.367C15.141 8.747 15.51 9 15.922 9H21.009C21.949 9 22.359 10.17 21.62 10.743L18 14C17.8379 14.1247 17.7194 14.2975 17.6615 14.4937C17.6037 14.6898 17.6094 14.8993 17.678 15.092L19 20.695C19.322 21.595 18.28 22.368 17.492 21.814L12.575 18.694C12.4066 18.5757 12.2058 18.5122 12 18.5122C11.7942 18.5122 11.5934 18.5757 11.425 18.694L6.50802 21.814C5.72102 22.368 4.67802 21.594 5.00002 20.695L6.32202 15.092C6.39059 14.8993 6.39637 14.6898 6.33852 14.4937C6.28068 14.2975 6.16217 14.1247 6.00002 14L2.38002 10.743C1.64002 10.17 2.05202 9 2.99002 9H8.07702C8.27731 9.00067 8.47308 8.9405 8.63843 8.82747C8.80378 8.71444 8.93092 8.55387 9.00302 8.367L11.073 2.633H11.074Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Container>
  );
}

BoxRepo.propTypes = {
  title: P.string.isRequired,
  owner: P.string.isRequired,
  language: P.string,
};
