export interface HeroJourney {
  company: string;
  industry: string;
  tagline: string;
  foundations: {
    wound: string;
    lie: string;
    want: string;
    need: string;
    shadow: string;
    elixir: string;
  };
  stages: {
    number: number;
    name: string;
    act: "DEPARTURE" | "INITIATION" | "RETURN";
    narrative: string;
  }[];
  transformationArc: string;
}
