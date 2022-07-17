import {
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Question } from "./Types/Question";
import { useTranslation } from "react-i18next";

export default function QuestionWidget(questionProps: {
  question: Question;
  idx: number;
  onSelect: (idx: number, question: Question, value: number) => void;
}) {
  const { question, idx, onSelect } = questionProps;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Card elevation={4} variant={"outlined"} className={classes.container}>
      <FormControl>
        <CardContent>
          <FormLabel className={classes.cardLabel}>
            <Typography className={classes.questionNo} color="text.secondary">
              {idx + 1}.
            </Typography>
          </FormLabel>
          <Typography variant="h5">{question.Text}</Typography>
        </CardContent>
        <CardActions>
          <RadioGroup className={classes.group} sx={{ flexWrap: "nowrap" }} row>
            <FormControlLabel
              value={-2}
              control={<Radio color="error" />}
              label={
                <Typography className={classes.radioLabel}>
                  {t("stronglyDisagree")}
                </Typography>
              }
              labelPlacement="bottom"
            />
            <FormControlLabel
              value={-1}
              control={<Radio color="warning" />}
              label={
                <Typography className={classes.radioLabel}>
                  {t("disagree")}
                </Typography>
              }
              labelPlacement="bottom"
            />
            <FormControlLabel
              value={0}
              control={<Radio color="default" />}
              label={
                <Typography className={classes.radioLabel}>
                  {t("neitherAgreeOrDisagree")}
                </Typography>
              }
              labelPlacement="bottom"
            />
            <FormControlLabel
              value={+1}
              control={<Radio color="success" />}
              label={
                <Typography className={classes.radioLabel}>
                  {t("agree")}
                </Typography>
              }
              labelPlacement="bottom"
            />
            <FormControlLabel
              value={+2}
              control={<Radio color="primary" />}
              label={
                <Typography className={classes.radioLabel}>
                  {t("stronglyAgree")}
                </Typography>
              }
              labelPlacement="bottom"
            />
          </RadioGroup>
        </CardActions>
      </FormControl>
    </Card>
  );
}
const useStyles = makeStyles({
  container: {
    width: "100%",
  },
  questionNo: {
    fontSize: 14,
  },
  redBorder: { borderColor: "red" },
  cardLabel: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  radioLabel: {
    fontSize: 8,
  },
  group: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
  },
});
