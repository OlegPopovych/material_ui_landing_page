import { ImageList, useMediaQuery } from '@mui/material';
import { itemData } from '../data';
import GalleryItem from '../GalleryItem';
import { overrides } from '../../styles';

const Gallery = () => {
	const { breakpoints } = overrides;

	const small = useMediaQuery(breakpoints.down('sm'));
	const medium = useMediaQuery(breakpoints.between('sm', 'md'));
	const large = useMediaQuery(breakpoints.up('md'));

	const columnsToShow = [small, medium, large].indexOf(true) + 1;

	return (
		<ImageList variant="masonry" cols={columnsToShow} gap={15}>
			{itemData.map(({ img, title }) => (
				<GalleryItem key={img} img={img} title={title} />
			))}
		</ImageList>
	);
};

export default Gallery;
