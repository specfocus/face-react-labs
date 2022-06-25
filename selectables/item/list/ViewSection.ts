import { ReactNode } from 'react';
import { Option } from '../../Option';

export interface ViewSection {
  subheader: ReactNode;
  options: Record<string, Option>;
}
