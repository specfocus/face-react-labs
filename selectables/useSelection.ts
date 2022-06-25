import { useState } from 'react';
import useEvent from '@specfocus/view-focus/effects/useEvent';

const useSelection = () => {
  const [selection, select] = useState<string[]>([]);

  const onSelect = useEvent(
    (key: string) => {
      if (selection.includes(key)) {
        select(selection.filter(item => item !== key));
      } else {
        select([...selection, key]);
      }
    }
  );
  return {
    selection,
    onSelect
  };
};

export default useSelection;
