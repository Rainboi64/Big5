export interface Conscientiousness {
  SelfEfficacy: number;
  Orderliness: number;
  Dutifulness: number;
  AchievementStriving: number;
  SelfDiscipline: number;
  Cautiousness: number;
  Total: number;
}

export function calculateConscientiousness(
  conscientiousness: Conscientiousness
) {
  conscientiousness.Total =
    conscientiousness.SelfEfficacy +
    conscientiousness.Orderliness +
    conscientiousness.Dutifulness +
    conscientiousness.AchievementStriving +
    conscientiousness.SelfDiscipline +
    conscientiousness.Cautiousness;
  return conscientiousness;
}
