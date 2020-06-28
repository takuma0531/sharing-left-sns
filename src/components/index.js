export const Post = () => import('./Post');
export const Shortcuts = () => import('./Shortcuts');

// Layouts component
export const Footer = () => import('./layouts/Footer');
export const NavBar = () => import('./layouts/NavBar');

// Modal component
export const CommentModal = () => import('./modals/CommentModal');
export const PasswordModal = () => import('./modals/PasswordModal');
export const UserEditionModal = () => import('./modals/UserEditionModal');

// Button component
export const CloseButton = () => import('./button/CloseButton');
export const PostShareButton = () => import('./button/PostShareButton');
export const UserDeleteButton = () => import('./button/UserDeleteButton');

// Form component
export const Form = () => import('./form/Form');
export const InputEmailField = () => import('./form/items/InputEmailField');
export const InputNicknameField = () =>
  import('./form/items/InputNicknameField');
export const InputPasswordField = () =>
  import('./form/items/InputPasswordField');
