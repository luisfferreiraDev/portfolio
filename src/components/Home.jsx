import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Intro from "./Intro";
import SocialBtn from "./SocialBtn";
import InfoBox from "./InfoBox";

import { motion } from "framer-motion";

//ICONS
import HandymanIcon from "@mui/icons-material/Handyman";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/material";

//TEXT
const projectsTitle = "Projects";
const projectsText = "Some of my professional and personal projects";
const contactTitle = "Contact me";
const contactText = "Get in touch, I'll reply as soon as I can";

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
                <Grid xs={8} sx={{}}>
                  <Item>
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
                        item
                        xs={4}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box sx={{ width: "100%", height: "100%" }}>
                          <SocialBtn
                            icon={<GitHubIcon fontSize="large" />}
                            text={"Github"}
                            delay={0.1}
                            url={"https://github.com/luisfferreiraDev"}
                          />
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box sx={{ width: "100%", height: "100%" }}>
                          <SocialBtn
                            icon={<LinkedInIcon fontSize="large" />}
                            text={"LinkedIn"}
                            delay={0.2}
                            url={"https://www.linkedin.com/in/luisfferreira99/"}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </Item>
                </Grid>
                <Grid
                  xs={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    height: "100%",
                  }}
                >
                  <Box sx={{ width: "100%", height: "100%" }}>
                    <InfoBox
                      title={projectsTitle}
                      text={projectsText}
                      onClick={() => console.log("clicked")}
                      icon={<HandymanIcon fontSize="large" />}
                      delay={0.3}
                      sectionId={"projectsSection"}
                    />
                  </Box>
                </Grid>
                <Grid
                  xs={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    height: "100%",
                  }}
                >
                  <Box sx={{ width: "100%", height: "100%" }}>
                    <InfoBox
                      title={contactTitle}
                      text={contactText}
                      onClick={() => console.log("clicked")}
                      icon={<EmailIcon fontSize="large" />}
                      delay={0.4}
                      sectionId={"contactsSection"}
                    />
                  </Box>
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
