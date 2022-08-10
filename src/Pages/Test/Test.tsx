import {
  Box,
  Button,
  CircularProgress,
  MobileStepper,
  Pagination,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import QuestionWidget from "./QuestionWidget";
import { Answer } from "./Types/Answer";
import { Question } from "./Types/Question";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { getQuestions, getUser, saveResult } from "../../firebase";
import { calculateResult } from "./Types/Result";
import { useNavigate } from "react-router-dom";

export default function Test() {
  const classes = useStyles();

  const [range, setRange] = useState(1);
  const [questions, setQuestions] = useState<Question[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadData() {
      const questions = (await getQuestions("arabic")).questions;
      setQuestions(questions.sort(() => Math.random() - 0.5));
    }

    if (!questions.length) {
      if (!getUser()) {
        navigate("/login");
      }
      loadData();
    }
  }, [questions]);

  const answersRef = useRef<Array<Answer>>([]);

  const nextPage = useCallback(
    async (e?: React.MouseEvent<unknown>) => {
      if (range === questions.length / 10) {
        const result = calculateResult(answersRef.current);
        await saveResult(result);
        navigate("/results");
      } else setRange(range + 1);
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

  return questions.length ? (
    <div className={classes.container}>
      <div className={classes.questions}>
        {questions.map((question, idx) => {
          if (idx >= (range - 1) * 10 && idx < range * 10) {
            return (
              <QuestionWidget
                question={question}
                idx={idx}
                onSelect={setResult}
              />
            );
          }
        })}
      </div>
      <div>
        <MobileStepper
          variant="progress"
          steps={questions.length / 10 + 1}
          position="static"
          activeStep={range}
          sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <Button size="small" onClick={nextPage}>
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
  ) : (
    <CircularProgress className="centered"></CircularProgress>
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
