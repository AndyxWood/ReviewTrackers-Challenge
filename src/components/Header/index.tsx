import './styles.scss';

interface HeaderPropsModel {
  headerTitle: string;
}

export const Header = ({ headerTitle }: HeaderPropsModel): JSX.Element => {
  return (
    <div className="header-wrapper">
      <div className="header-text-wrapper">
        <div className="header-text">{headerTitle}</div>
      </div>
    </div>
  );
};

export default Header;
