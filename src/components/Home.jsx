import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Intro from "./Intro";
import SocialBtn from "./SocialBtn";
import InfoBox from "./InfoBox";

//ICONS
import HandymanIcon from "@mui/icons-material/Handyman";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

//TEXT
const projectsTitle = "Projects";
const projectsText = "Some of my professional and personal projects";
const contactTitle = "Contact me";
const contactText = "I'll reply as soon as I can";

const Home = () => {
  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid sx={{ height: "45vh" }} xs={12}>
            <Item></Item>
          </Grid>
          <Grid xs={12}>
            <Item>
              <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid xs={4}>
                  <Item></Item>
                </Grid>
                <Grid
                  className="glass-effect"
                  xs={8}
                  sx={{
                    height: "40vh",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Item sx={{ width: "100%" }}>
                    <Intro />
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          <Grid xs={12}>
            <Item>
              <Grid
                container
                columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{ height: "15vh" }}
              >
                <Grid xs={4}>
                  <Item>
                    <Grid
                      container
                      columns={{ xs: 4, sm: 8, md: 12 }}
                      sx={{ height: "15vh" }}
                    >
                      <Grid xs={0} md={4}>
                        <Item></Item>
                      </Grid>
                      <Grid
                        xs={4}
                        sx={{
                          bgcolor: "error.main",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Item>
                          <SocialBtn
                            icon={<GitHubIcon fontSize="large" />}
                            text={"GitHub"}
                          />
                        </Item>
                      </Grid>
                      <Grid
                        xs={4}
                        sx={{
                          bgcolor: "warning.main",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Item>
                          <SocialBtn
                            icon={<LinkedInIcon fontSize="large" />}
                            text={"LinkedIn"}
                          />
                        </Item>
                      </Grid>
                    </Grid>
                  </Item>
                </Grid>
                <Grid
                  xs={4}
                  sx={{
                    bgcolor: "gray",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Item>
                    <InfoBox
                      title={projectsTitle}
                      text={projectsText}
                      onClick={() => console.log("clicked")}
                      icon={<HandymanIcon fontSize="large" />}
                    />
                  </Item>
                </Grid>
                <Grid
                  xs={4}
                  sx={{
                    bgcolor: "secondary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Item>
                    <InfoBox
                      title={contactTitle}
                      text={contactText}
                      onClick={() => console.log("clicked")}
                      icon={<EmailIcon fontSize="large" />}
                    />
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
