import { Jelly } from "@uiball/loaders";
import '../../styles/Loader.scss';

export default function Loader() {
	return (
		<div className='backdrop'>
			<Jelly
				size={180}
				speed={0.8}
				color="54ADFF"
			/>
		</div>
	);
}
