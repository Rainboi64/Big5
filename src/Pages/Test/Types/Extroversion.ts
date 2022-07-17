export interface Extraversion {
  Friendliness: number;
  Gregariousness: number;
  Assertiveness: number;
  ActivityLevel: number;
  ExcitementSeeking: number;
  Cheerfulness: number;
  Total: number;
}

export function calculateExtraversion(extraversion: Extraversion) {
  extraversion.Total =
    extraversion.ActivityLevel +
    extraversion.Assertiveness +
    extraversion.Cheerfulness +
    extraversion.ExcitementSeeking +
    extraversion.Friendliness +
    extraversion.Gregariousness;
  return extraversion;
}
