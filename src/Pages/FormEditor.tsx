import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Questions } from "./Test/Questions";
import { Question } from "./Test/Types/Question";
import { useEffect, useRef, useState } from "react";
import { getQuestions, uploadQuestions } from "../firebase";

const categories = [
  "Trust",
  "Morality",
  "Altruism",
  "Cooperation",
  "Modesty",
  "Sympathy",
  "Self Efficacy",
  "Orderliness",
  "Dutifulness",
  "Achievement Striving",
  "Self Discipline",
  "Cautiousness",
  "Friendliness",
  "Gregariousness",
  "Assertiveness",
  "Activity Level",
  "Excitement Seeking",
  "Cheerfulness",
  "Imagination",
  "Artistic Interests",
  "Emotionality",
  "Adventurousness",
  "Intellect",
  "Liberalism",
  "Anxiety",
  "Anger",
  "Depression",
  "Self Consciousness",
  "Immoderation",
  "Vulnerability",
];

export default function FormEditor() {
  const theme = useTheme();

  const questionsRef = useRef<{ english: Question[]; arabic: Question[] }>({
    english: [],
    arabic: [],
  });

  const [questions, setQuestions] = useState<Question[]>([]);
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    async function loadData() {
      questionsRef.current.arabic = (await getQuestions("arabic")).questions;
      //   questionsRef.current.english = (await getQuestions("english")).questions;
      setQuestions(questionsRef.current.arabic);
      setReady(true);
    }

    if (!ready) {
      loadData();
    }
  }, [ready]);

  function onChangeCallback(idx: number, question: Question) {
    setQuestions((value) =>
      value.map((q, i) => {
        return i !== idx ? q : question;
      })
    );
  }

  return (
    <Box display={"flex"} flexDirection={"column"} padding="24px 24px">
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent="space-between"
        padding="24px 24px"
      >
        <Typography fontSize={"45px"} color={theme.palette.text.primary}>
          Edit Form
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap="3px"
          flexWrap="wrap"
          justifyContent="flex-end"
        >
          {/* <Select
            onChange={(e) => {
              setQuestions(
                e.target.value
                  ? questionsRef.current.arabic
                  : questionsRef.current.english
              );
            }}
            defaultValue={0}
          >
            <MenuItem value={0}>Arabic</MenuItem>
            <MenuItem value={1}>English</MenuItem>
          </Select> */}

          <Button
            variant="contained"
            color="success"
            onClick={() => {
              uploadQuestions(questions, "arabic");
            }}
          >
            Confirm
          </Button>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap="3px">
        {questions.length ? (
          questions.map((q, i) => (
            <QuestionDialog
              question={q}
              idx={i}
              onChangeCallback={(question) => onChangeCallback(i, question)}
            />
          ))
        ) : (
          <Box className="centered">
            <CircularProgress />
          </Box>
        )}
      </Box>
    </Box>
  );
}

function QuestionDialog(props: {
  question: Question;
  idx: number;
  onChangeCallback: (question: Question) => void;
}) {
  const { question, idx, onChangeCallback: callback } = props;
  const [q, setQ] = useState<Question>(question);

  return (
    <Card elevation={4} sx={{ minHeight: "128px", margin: "4px" }}>
      <CardHeader title={"Question " + (1 + idx)} />
      <Divider />
      <CardContent>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Box>
            <TextField
              sx={{ minWidth: "500px" }}
              label="Quesion Label"
              variant="outlined"
              value={q.Text}
              onChange={(e) => {
                setQ({
                  ...q,
                  Text: e.target.value,
                });
              }}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            gap="4px"
            flexWrap="wrap"
          >
            <Select
              sx={{ minWidth: "150px" }}
              label="Question Category"
              value={q.Category}
              onChange={(e) => {
                setQ({ ...q, Category: e.target.value });
              }}
            >
              {categories.map((x) => (
                <MenuItem value={x}>{x}</MenuItem>
              ))}
            </Select>
            <Select
              sx={{ minWidth: "150px" }}
              label="Question Polarity"
              value={q.Polarity}
              onChange={(e) => {
                setQ({
                  ...q,
                  Polarity: e.target.value as "Negative" | "Positive",
                });
              }}
            >
              <MenuItem value="Negative">Negative</MenuItem>
              <MenuItem value="Positive">Positive</MenuItem>
            </Select>
            <Button
              variant="outlined"
              color="success"
              onClick={() => {
                callback(q);
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
