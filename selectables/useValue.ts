import { useMemo, useState } from 'react';
import useEvent from '@specfocus/view-focus/effects/useEvent';

const useValue = () => {
  const [value, select] = useState<string | null>(null);
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
