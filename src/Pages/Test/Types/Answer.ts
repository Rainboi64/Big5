export interface Answer {
  QuestionText: string;
  Polarity: "Negative" | "Positive";
  Category: string;
  Result: AnswerResult;
}

export enum AnswerResult {
  StronglyDisagree = 1,
  Disagree = 2,
  NeitherAgreeOrDisagree = 3,
  Agree = 4,
  StronglyAgree = 5,
}
