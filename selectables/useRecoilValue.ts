import type { RecoilState } from 'recoil';
import { useRecoilState } from 'recoil';
import { useMemo } from 'react';
import useEvent from '@specfocus/view-focus/effects/useEvent';

const useValue = (state: RecoilState<string | null>) => {
  const [value, select] = useRecoilState(state);
  const onSelect = useEvent(
    (key: string) => {
      select(value !== key ? key : null);
    }
  );
  const selection = useMemo(
    () => value !== null ? [value] : [],
    [value]
  );
  return {
    selection,
    value,
    onSelect
  };
};

export default useValue;
