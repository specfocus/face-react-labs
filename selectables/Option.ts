import { ReactNode } from 'react';

export interface Option {
  icon?: ReactNode;
  primary: ReactNode;
  secondary?: ReactNode;
}

export interface OptionRaw {
  path?: string;
  icon?: string;
  primary: string;
  secondaty?: string;
}

export interface Inflate {
  /**
   * 
   */
  (value?: string, path?: string, tag?: 'icon' | 'primary' | 'secondary'): ReactNode | undefined;
}

export interface Render {
  (option: Option): ReactNode | undefined;
}

const group = (raw: OptionRaw[], inflate: Inflate): Record<string, Option[]> => {
  return raw.reduce<Record<string, Option[]>>(
    (acc, { path, ...record }) => {
      const option = Object.entries(record).reduce(
        (opt, [key, val]) => Object.assign(opt, { [key]: inflate(val) }),
        {} as Option
      );
      const key = path || '';
      const { [key]: options } = acc;
      if (!options) {
        Object.assign(acc, { [key]: [option] });
      } else {
        options.push(option);
      }
      return acc;
    },
    {}
  );
};

export default group;
