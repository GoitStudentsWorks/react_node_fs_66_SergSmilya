import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import css from './Footer.module.css';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Footer = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    isLoggedIn && (
      <footer className={css.footer}>
        <div className={css.container}>
          <Navigation />
        </div>
        <div className={css.footer_text}>
          <p>&#169; 2023 All Rights Reserved.</p>
          <p className={css.footer_text_service}>Terms of Service</p>
        </div>
      </footer>
    )
  );
};
