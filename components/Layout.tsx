import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import theme from "../config/theme";
import Footer from "./footer/footer";
import TopBar from "./NavBar/NavBar";
import Board from "./Board/Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AddIcon from "@mui/icons-material/Add";
import { ColumnType } from "../utils/enums/columnType.enum";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
} from "@mui/material";
import useColumnTasks from "../hooks/useColumnTasks";
import SearchBox from "./Board/SearchBox";
import useTaskCollection from "../hooks/useTaskCollection";



export default function Layout() {
  const { addEmptyTask } = useColumnTasks(ColumnType.TO_DO);
  const { addInProgressTask } = useColumnTasks(ColumnType.IN_PROGRESS);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <TopBar />
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Kanban Board
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container>
        {/* <Paper sx={{ padding: "32px" }} elevation={4}> */}
        <DndProvider backend={HTML5Backend}>
          <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1 }}>
              <Stack
                mb={5}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              ></Stack>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 6, md: 12 }}
              >
                <Grid item xs={4}>
                  <Card>
                    <Stack
                      direction="row"
                      flexWrap="wrap-reverse"
                      alignItems="center"
                      justifyContent="flex-start"
                      spacing={12}
                    >
                      <CardHeader title={ColumnType.TO_DO} />
                      <IconButton
                        size="small"
                        edge="end"
                        color="success"
                        aria-label="open task"
                        onClick={addEmptyTask}
                      >
                        <AddIcon />
                      </IconButton>
                    </Stack>
                    <Divider />

                    <CardContent
                      sx={{
                        "& .MuiTimelineItem-missingOppositeContent:before": {
                          display: "none",
                        },
                      }}
                    >
                      <Board column={ColumnType.TO_DO} />
                    </CardContent>
                    <CardActions>
                      <Typography
                        align="center"
                        color="text.secondary"
                        component="p"
                      >
                        
                      </Typography>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card>
                    <Stack
                      direction="row"
                      flexWrap="wrap-reverse"
                      alignItems="center"
                      justifyContent="flex-start"
                      spacing={5}
                    >
                      <CardHeader title={ColumnType.IN_PROGRESS} />
                      <IconButton
                        size="small"
                        edge="end"
                        color="success"
                        aria-label="open task"
                        onClick={addInProgressTask}
                      >
                        <AddIcon />
                      </IconButton>
                    </Stack>
                    <Divider />
                    <CardContent
                      sx={{
                        "& .MuiTimelineItem-missingOppositeContent:before": {
                          display: "none",
                        },
                      }}
                    >
                      <Board column={ColumnType.IN_PROGRESS} />
                    </CardContent>
                    <CardActions>
                      <Typography
                        align="center"
                        color="text.secondary"
                        component="p"
                      >
                        1 of 1
                      </Typography>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card>
                    <CardHeader title={ColumnType.DONE} />
                    <Divider />
                    <CardContent
                      sx={{
                        "& .MuiTimelineItem-missingOppositeContent:before": {
                          display: "none",
                        },
                      }}
                    >
                      <Board column={ColumnType.DONE} />
                    </CardContent>
                    <CardActions>
                      <Typography
                        align="center"
                        color="text.secondary"
                        component="p"
                      >
                        1 of 1
                      </Typography>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </DndProvider>
        {/* </Paper> */}
      </Container>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </ThemeProvider>
  );
}
