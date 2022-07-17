export interface Openness {
  Imagination: number;
  ArtisticInterests: number;
  Emotionality: number;
  Adventurousness: number;
  Intellect: number;
  Liberalism: number;
  Total: number;
}

export function calculateOpenness(openness: Openness) {
  openness.Total =
    openness.Imagination +
    openness.ArtisticInterests +
    openness.Emotionality +
    openness.Adventurousness +
    openness.Intellect +
    openness.Liberalism;
  return openness;
}
