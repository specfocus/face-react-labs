import { AppBar, Layout } from '@specfocus/view-focus.mui/layouts';
import { memo } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { UserMenu } from './UserMenu';

const MyAppBar = memo(
  props => <AppBar {...props} userMenu={<UserMenu />} />
);

export default props => (
  <>
    <Layout {...props} appBar={MyAppBar} />
    <ReactQueryDevtools
      initialIsOpen={false}
      toggleButtonProps={{ style: { width: 20, height: 30 } }}
    />
  </>
);