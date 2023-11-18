import './home.style.scss';
import DirectoryList from '../../components/directory-list/directory-list';

export const HomePage = ({displayName}) => {
  return (
    <div className="homepage">
      <div className="greetings" style={{padding: '0 0 5rem 0'}}>
        {displayName ? (
          <>
            <h2>Welcome!</h2>
            <span>{displayName}</span>
          </>
        ) : (
          ''
        )}
      </div>
      <DirectoryList />
    </div>
  );
};
