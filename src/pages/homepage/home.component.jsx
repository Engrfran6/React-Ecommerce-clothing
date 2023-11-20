import './home.style.scss';
import DirectoryList from '../../components/directory-list/directory-list';
import {selectUser} from '../../redux/features/user/userSlice';
import {useSelector} from 'react-redux';

export const HomePage = () => {
  const currentUser = useSelector(selectUser);
  return (
    <div className="homepage">
      <div className="greetings" style={{padding: '0 0 5rem 0'}}>
        {currentUser ? (
          <>
            <h2>Welcome!</h2>
            <span>{currentUser.displayName}</span>
          </>
        ) : (
          ''
        )}
      </div>
      <DirectoryList />
    </div>
  );
};
