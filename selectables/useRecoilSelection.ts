import useEvent from '@specfocus/view-focus/effects/useEvent';
import type { RecoilState } from 'recoil';
import { useRecoilState } from 'recoil';

const useSelection = (state: RecoilState<string[]>) => {
  const [selection, select] = useRecoilState(state);

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
