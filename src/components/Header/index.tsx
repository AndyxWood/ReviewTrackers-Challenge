import './styles.scss';

interface HeaderPropsModel {
  headerTitle: string;
  classnames?: string;
}

export const Header = ({headerTitle, classnames}: HeaderPropsModel): JSX.Element => {
  return (  
    <div className={`header-wrapper ${classnames}`}> 
      <div className='header-text-wrapper'>
        <div className="header-text">{headerTitle}</div>
      </div>
    </div>
  );
};

export default Header;