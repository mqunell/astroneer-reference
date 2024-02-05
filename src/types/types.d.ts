type PlanetName =
	| 'Sylva'
	| 'Desolo'
	| 'Calidor'
	| 'Vesania'
	| 'Novus'
	| 'Glacio'
	| 'Atrox';

type NaturalResource =
	| 'Hematite'
	| 'Lithium'
	| 'Malachite'
	| 'Sphalerite'
	| 'Titanite'
	| 'Wolframite';

type AtmosphericResource =
	| 'Argon'
	| 'Helium'
	| 'Hydrogen'
	| 'Methane'
	| 'Nitrogen'
	| 'Sulfur';

type PowerClassification = 'Very Low' | 'Low' | 'Medium' | 'High' | 'Very High';

type Planet = {
	id: number;
	name: PlanetName;
	primary: NaturalResource | null;
	secondary: NaturalResource | null;
	gases: AtmosphericResource[];
	difficulty: 'Easy' | 'Medium' | 'Hard' | 'Very Hard';
	sun: PowerClassification;
	wind: PowerClassification;
};
