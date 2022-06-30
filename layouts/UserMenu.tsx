import { Logout } from '@specfocus/view-focus.mui/auth/Logout';
import { UserMenu as BaseMenu } from '@specfocus/view-focus.mui/layouts/UserMenu';
import { SwitchLanguage } from './SwitchLanguage';

export const UserMenu = () => (
  <BaseMenu>
    <SwitchLanguage />
    <Logout />
  </BaseMenu>
);