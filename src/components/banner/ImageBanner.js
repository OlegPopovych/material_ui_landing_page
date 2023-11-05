
import Image from 'mui-image'

const ImageBanner = () => {
	return <Image
		src="images/banner-cat1.png"
		height="100%"
		width="100%"
		fit="contain"
		duration={2000}
		easing="cubic-bezier(0.7, 0, 0.6, 1)"
		showLoading={false}
		errorIcon={true}
		shift={null}
		distance="100px"
		shiftDuration={900}
		bgColor="inherit"
	/>
}
export default ImageBanner;