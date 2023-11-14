import './home.style.scss';
import DirectoryList from '../../components/directory-list/directory-list';

export const HomePage = () => {
  return (
    <div className="homepage">
      <DirectoryList />
    </div>
  );
};
