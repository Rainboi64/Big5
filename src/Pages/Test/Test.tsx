import { Pagination } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Questions } from "./Questions";
import QuestionWidget from "./QuestionWidget";
import { Answer } from "./Types/Answer";
import { Question } from "./Types/Question";

export default function Test() {
  const classes = useStyles();

  const [range, setRange] = useState(1);

  const shuffledQuestions = useMemo(
    () => Questions.sort(() => Math.random() - 0.5),
    []
  );

  const answersRef = useRef(new Array<Answer>(Questions.length));

  const changePage = useCallback(
    (e: React.ChangeEvent<unknown>, value: number) => {
      setRange(value);
    },
    [setRange]
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
        <Pagination
          count={Questions.length / 10}
          page={range}
          onChange={changePage}
        />
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    paddingBottom: 24,
  },
  questions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px 0px",
    gap: 24,
  },
});
