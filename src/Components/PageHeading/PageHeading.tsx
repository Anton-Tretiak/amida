import { FC } from 'react';

import './PageHeading.scss';

type Props = {
  title: string;
};

export const PageHeading: FC<Props> = ({ title }) => (
  <h1 className='title'>{title}</h1>
);