import { calculateAgreeableness, Agreeableness } from "./Agreeableness";
import { Answer } from "./Answer";
import {
  calculateConscientiousness,
  Conscientiousness,
} from "./Conscientiousness";
import { calculateExtraversion, Extraversion } from "./Extroversion";
import { calculateNeurocitism, Neurocitism } from "./Neurocitism";
import { calculateOpenness, Openness } from "./Openness";

export interface Result {
  Agreeableness: Agreeableness;
  Conscientiousness: Conscientiousness;
  Extroversion: Extraversion;
  Openness: Openness;
  Neurocitism: Neurocitism;
}

export function calculateResult(answers: Answer[]) {
  const result: Result = {
    Agreeableness: {
      Trust: 0,
      Morality: 0,
      Altruism: 0,
      Cooperation: 0,
      Modesty: 0,
      Sympathy: 0,
      Total: 0,
    },
    Conscientiousness: {
      SelfEfficacy: 0,
      Orderliness: 0,
      Dutifulness: 0,
      AchievementStriving: 0,
      SelfDiscipline: 0,
      Cautiousness: 0,
      Total: 0,
    },
    Extroversion: {
      Friendliness: 0,
      Gregariousness: 0,
      Assertiveness: 0,
      ActivityLevel: 0,
      ExcitementSeeking: 0,
      Cheerfulness: 0,
      Total: 0,
    },
    Openness: {
      Imagination: 0,
      ArtisticInterests: 0,
      Emotionality: 0,
      Adventurousness: 0,
      Intellect: 0,
      Liberalism: 0,
      Total: 0,
    },
    Neurocitism: {
      Anxiety: 0,
      Anger: 0,
      Depression: 0,
      SelfConsciousness: 0,
      Immoderation: 0,
      Vulnerability: 0,
      Total: 0,
    },
  };

  var score = 0;

  answers.forEach((answer) => {
    switch (answer.Polarity) {
      case "Positive":
        score = answer.Result.valueOf();
        break;

      case "Negative":
        score = 6 - answer.Result.valueOf();
        break;
      default:
        console.error(
          "invalid answer polarity '" +
            answer.Polarity +
            "' on answer " +
            answer.QuestionText
        );
    }

    switch (answer.Category) {
      // Neurocitism

      case "Anxiety":
        result.Neurocitism.Anxiety += score;
        break;
      case "Anger":
        result.Neurocitism.Anger += score;
        break;
      case "Depression":
        result.Neurocitism.Depression += score;
        break;
      case "Self Consciousness":
        result.Neurocitism.SelfConsciousness += score;
        break;
      case "Immoderation":
        result.Neurocitism.Immoderation += score;
        break;
      case "Vulnerability":
        result.Neurocitism.Vulnerability += score;
        break;

      // Extroversion

      case "Friendliness":
        result.Extroversion.Friendliness += score;
        break;
      case "Gregariousness":
        result.Extroversion.Gregariousness += score;
        break;
      case "Assertiveness":
        result.Extroversion.Assertiveness += score;
        break;
      case "Activity Level":
        result.Extroversion.ActivityLevel += score;
        break;
      case "Excitement Seeking":
        result.Extroversion.ExcitementSeeking += score;
        break;
      case "Cheerfulness":
        result.Extroversion.Cheerfulness += score;
        break;

      // Openness

      case "Imagination":
        result.Openness.Imagination += score;
        break;
      case "Artistic Interests":
        result.Openness.ArtisticInterests += score;
        break;
      case "Emotionality":
        result.Openness.Emotionality += score;
        break;
      case "Adventurousness":
        result.Openness.Adventurousness += score;
        break;
      case "Intellect":
        result.Openness.Intellect += score;
        break;
      case "Liberalism":
        result.Openness.Liberalism += score;
        break;

      // Agreeableness

      case "Trust":
        result.Agreeableness.Trust += score;
        break;
      case "Morality":
        result.Agreeableness.Morality += score;
        break;
      case "Altruism":
        result.Agreeableness.Altruism += score;
        break;
      case "Cooperation":
        result.Agreeableness.Cooperation += score;
        break;
      case "Modesty":
        result.Agreeableness.Modesty += score;
        break;
      case "Sympathy":
        result.Agreeableness.Sympathy += score;
        break;

      // Conscientiousness

      case "Self Efficacy":
        result.Conscientiousness.SelfEfficacy += score;
        break;
      case "Orderliness":
        result.Conscientiousness.Orderliness += score;
        break;
      case "Dutifulness":
        result.Conscientiousness.Dutifulness += score;
        break;
      case "Achievement Striving":
        result.Conscientiousness.AchievementStriving += score;
        break;
      case "Self Discipline":
        result.Conscientiousness.SelfDiscipline += score;
        break;
      case "Cautiousness":
        result.Conscientiousness.Cautiousness += score;
        break;

      default:
        console.error(
          "invalid answer category '" +
            answer.Category +
            "' on answer " +
            answer.QuestionText
        );
    }
  });

  result.Agreeableness = calculateAgreeableness(result.Agreeableness);
  result.Conscientiousness = calculateConscientiousness(
    result.Conscientiousness
  );
  result.Neurocitism = calculateNeurocitism(result.Neurocitism);
  result.Openness = calculateOpenness(result.Openness);
  result.Extroversion = calculateExtraversion(result.Extroversion);

  return result;
}
