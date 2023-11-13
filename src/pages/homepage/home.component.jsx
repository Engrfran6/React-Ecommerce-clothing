import './home.style.scss';
import DirectoryList from '../../components/directory-list/directoryList';

export const HomePage = () => {
  return (
    <div className="homepage">
      <DirectoryList />
    </div>
  );
};
