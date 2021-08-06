/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import P from 'prop-types';
import { Btn } from './styles';

export function Button({ title, onClick }) {
  return <Btn onClick={onClick}>{title}</Btn>;
}

Button.propTypes = {
  title: P.string.isRequired,
  onClick: P.func.isRequired,
};
