import { planets } from '@/data/planets';
import Planet from './Planet';

const Home = () => (
	<div className="flex flex-wrap justify-center gap-8 p-8">
		{planets.map((planet: Planet) => (
			<Planet key={planet.id} {...planet} />
		))}
	</div>
);

export default Home;
