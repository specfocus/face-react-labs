import { useMemo, useState } from 'react';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import useEvent from '@specfocus/view-focus/effects/useEvent';

export type NavigationMap = Record<string, string>;

const useNavigation = (paths: NavigationMap) => {
  const [picks, pick] = useState<string[]>();
  const { pathname } = useLocation();
  const selection = useMemo(
    () => {
      let matches = Object.entries(
        paths
      ).map(
        ([key, path]) => ({
          key,
          path,
          match: matchPath(
            { path, end: true, caseSensitive: false },
            pathname
          )
        })
      ).filter(
        ({ match }) => match !== null
      );

      if (matches.length === 0) {
        return picks;
      }

      // if match exact
      if (matches.some(({ path, match }) => match.pathname === path)) {
        matches = matches.filter(({ path, match }) => match.pathname === path);
      }

      return [
        ...matches
          .map(
            ({ key }) => key
          ),
        ...picks,
      ];
    },
    [paths, pathname, picks]
  );
  const navigate = useNavigate();
  const onSelect = useEvent(
    (key: string) => {
      const { [key]: path } = paths;
      if (path) {
        pick([]);
        navigate(path);
      } else if (picks.includes(key)) {
        pick(picks.filter(item => item !== key));
      } else {
        pick([...selection, key]);
      }
    }
  );
  return {
    selection,
    onSelect
  };
};

export default useNavigation;
