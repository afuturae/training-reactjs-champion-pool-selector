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

export type { ChampionType, ChampionTypeJson };