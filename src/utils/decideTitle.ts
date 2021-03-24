import { sortByTypes } from '../types';

const decideTitle = (title: string): sortByTypes['sortBy'] => {
    if (title === 'Tip') return 'Type';
    if (title === 'Rota İsmi') return 'Route';
    if (title === 'Kategori') return 'Category';
    if (title === 'Aksiyon') return 'Action';
    return 'Date';
};

export default decideTitle;
