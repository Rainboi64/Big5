import { ViewColumn } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import BiotechIcon from "@mui/icons-material/Biotech";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import TranslateIcon from "@mui/icons-material/Translate";
import React from "react";
import { getUser } from "../firebase";

export default function Dashboard() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Typography
            sx={{
              flex: "1",
              margin: "50px",
              fontSize: "10vw",
              color: theme.palette.text.primary,
            }}
          >
            Understand Yourself.
          </Typography>

          <Box
            sx={{
              flex: "1",
              margin: "50px",
              placeSelf: "center",
              display: "flex",
              flexDirection: "column",
              gap: "48px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
              }}
            >
              The Big 5 Personality test will help you understand yourself, and
              form a more coherent and full understanding of your personality,
              and will let you explore your traits over time. and moniter your
              self progress and acheivements.
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                if (getUser()) {
                }
              }}
            >
              Begin Test
            </Button>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "space-evenly",
            background: theme.palette.background.paper,
            minHeight: "300px",
          }}
        >
          <Card sx={{ margin: "12px", maxWidth: "400px" }} elevation={4}>
            <CardHeader
              title={"Free"}
              titleTypographyProps={{ variant: "h4" }}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Avatar sx={{ height: "75px", width: "75px" }}>
                <MoneyOffIcon fontSize="large" />
              </Avatar>
              <Typography>
                You can do this test completely freely and online.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ margin: "12px", maxWidth: "400px" }} elevation={4}>
            <CardHeader
              title={"Scientific"}
              titleTypographyProps={{ variant: "h4" }}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Avatar sx={{ height: "75px", width: "75px" }}>
                <BiotechIcon fontSize="large" />
              </Avatar>
              <Typography>
                BigFive is a scientifically validated and reliable psychological
                model.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ margin: "12px", maxWidth: "400px" }} elevation={4}>
            <CardHeader
              title={"Translated"}
              titleTypographyProps={{ variant: "h4" }}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Avatar sx={{ height: "75px", width: "75px" }}>
                <TranslateIcon fontSize="large" />
              </Avatar>
              <Typography>
                This test is available in Arabic as well as English!
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h1"
          sx={{
            flex: "1",
            fontSize: "10vw",
            color: theme.palette.text.secondary,
          }}
        >
          Explore
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "space-evenly",
            minHeight: "300px",
          }}
        >
          <Card sx={{ margin: "12px", maxWidth: "250px" }} elevation={4}>
            <CardHeader
              title={"Openness"}
              titleTypographyProps={{ variant: "h5" }}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Typography>
                This test is available in Arabic as well as English!
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ margin: "12px", maxWidth: "250px" }} elevation={4}>
            <CardHeader
              title={"Conscientiousness"}
              titleTypographyProps={{ variant: "h5" }}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Typography>
                This test is available in Arabic as well as English!
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ margin: "12px", maxWidth: "250px" }} elevation={4}>
            <CardHeader
              title={"Extraversion"}
              titleTypographyProps={{ variant: "h5" }}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Typography>
                This test is available in Arabic as well as English!
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ margin: "12px", maxWidth: "250px" }} elevation={4}>
            <CardHeader
              title={"Agreeableness"}
              titleTypographyProps={{ variant: "h5" }}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Typography>
                This test is available in Arabic as well as English!
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ margin: "12px", maxWidth: "250px" }} elevation={4}>
            <CardHeader
              title={"Neuroticism"}
              titleTypographyProps={{ variant: "h5" }}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Typography>
                This test is available in Arabic as well as English!
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}
