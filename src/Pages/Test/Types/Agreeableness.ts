export interface Agreeableness {
  Trust: number;
  Morality: number;
  Altruism: number;
  Cooperation: number;
  Modesty: number;
  Sympathy: number;
  Total: number;
}

export function calculateAgreeableness(agreeableness: Agreeableness) {
  agreeableness.Total =
    agreeableness.Trust +
    agreeableness.Morality +
    agreeableness.Altruism +
    agreeableness.Cooperation +
    agreeableness.Modesty +
    agreeableness.Sympathy;
  return agreeableness;
}
