interface ChampionTypeJson {
    id: string;
    name: string;
    title: string;
    image: {
        full: string;
    }
}

interface ChampionType {
    id: string;
    name: string;
    title: string;
    image: string;
}

interface ChampionTypeWhithIndex extends ChampionType {
    index: number;
}

export type { ChampionType, ChampionTypeJson, ChampionTypeWhithIndex };