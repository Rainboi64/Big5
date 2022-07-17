export interface Neurocitism {
  Anxiety: number;
  Anger: number;
  Depression: number;
  SelfConsciousness: number;
  Immoderation: number;
  Vulnerability: number;
  Total: number;
}

export function calculateNeurocitism(neurocitism: Neurocitism) {
  neurocitism.Total =
    neurocitism.Anxiety +
    neurocitism.Anger +
    neurocitism.Depression +
    neurocitism.SelfConsciousness +
    neurocitism.Immoderation +
    neurocitism.Vulnerability;
  return neurocitism;
}
