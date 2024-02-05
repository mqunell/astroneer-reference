import clsx from 'clsx';
import Image from 'next/image';

const bgColors: { [key in PlanetName]: string } = {
	Sylva: 'bg-emerald-600',
	Desolo: 'bg-zinc-400',
	Calidor: 'bg-yellow-700',
	Vesania: 'bg-purple-800',
	Novus: 'bg-slate-400',
	Glacio: 'bg-red-800',
	Atrox: 'bg-lime-600',
};

const Planet = ({ name, primary, secondary, gases, difficulty, sun, wind }: Planet) => (
	<div
		className={clsx(
			'flex w-[200px] flex-col items-center gap-1 rounded bg-opacity-70 px-6 py-4 text-center text-white drop-shadow-lg backdrop-blur-md',
			bgColors[name],
		)}
	>
		<div className="flex items-center gap-2">
			<div className="border-1 relative size-6 rounded-full border bg-black">
				<Image src={`/planets/${name}.webp`} alt={`${name} icon`} fill={true} />
			</div>
			<h2 className="text-xl">{name}</h2>
		</div>
		<hr className="my-1 w-full" />
		<div className="flex h-full flex-col items-center gap-4">
			<p className="flex flex-col items-center">
				<span>🔦 {primary || '-'}</span>
				<span>🗻 {secondary || '-'}</span>
			</p>
			<p>🌫️ {gases.length ? gases.join(', ') : '-'}</p>
			<p className="mt-auto flex flex-col items-center">
				<span>☀️ {sun}</span>
				<span>💨 {wind}</span>
			</p>
		</div>
	</div>
);

export default Planet;
