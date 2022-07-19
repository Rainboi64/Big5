import { Button, MobileStepper, Pagination } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Questions } from "./Questions";
import QuestionWidget from "./QuestionWidget";
import { Answer } from "./Types/Answer";
import { Question } from "./Types/Question";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function Test() {
  const classes = useStyles();

  const [range, setRange] = useState(1);

  const shuffledQuestions = useMemo(
    () => Questions.sort(() => Math.random() - 0.5),
    []
  );

  const questionCount = useMemo(() => Questions.length, []);

  const answersRef = useRef(new Array<Answer>(Questions.length));

  const nextPage = useCallback(
    (e?: React.MouseEvent<unknown>) => {
      setRange(range + 1);
    },
    [range, setRange]
  );

  const previousPage = useCallback(
    (e?: React.MouseEvent<unknown>) => {
      setRange(range - 1);
    },
    [range, setRange]
  );

  const setResult = useCallback(
    (idx: number, question: Question, value: number) => {
      answersRef.current[idx] = {
        QuestionText: question.Text,
        Polarity: question.Polarity,
        Category: question.Category,
        Result: value,
      };
    },
    []
  );

  return (
    <div className={classes.container}>
      <div className={classes.questions}>
        {shuffledQuestions.map((question, idx) =>
          idx >= (range - 1) * 10 && idx < range * 10 ? (
            <QuestionWidget
              question={question}
              idx={idx}
              onSelect={setResult}
            />
          ) : null
        )}
      </div>
      <div>
        <MobileStepper
          variant="progress"
          steps={questionCount / 10}
          position="static"
          activeStep={range}
          sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <Button
              size="small"
              onClick={nextPage}
              disabled={range === questionCount / 10}
            >
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={previousPage} disabled={range === 1}>
              <KeyboardArrowLeft />
            </Button>
          }
        />
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    paddingBottom: 24,
  },
  questions: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px 2vw",
    gap: 24,
  },
});
