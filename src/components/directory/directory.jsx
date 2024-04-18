import {useSelector} from 'react-redux';
import './directory.scss';
import {selectDirectorySection} from '../../redux/selectors/selector';
import {DirectoryCard} from '../directory-card/directory-card';

export const Directory = () => {
  const section = useSelector(selectDirectorySection);

  return (
    <section className="card-data">
      {section.map(({id, ...otherProps}) => (
        <DirectoryCard key={id} {...otherProps} />
      ))}
    </section>
  );
};
