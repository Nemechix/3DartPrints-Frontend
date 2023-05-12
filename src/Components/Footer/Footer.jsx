import { Card, Divider, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Footer.css"
import logo from '/3DArts_Logo_TRIM.png'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Card
      sx={{
        width: "100%",
        height: "20%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2D27AA",
        color: "white",
        borderRadius: "0px",
        paddingTop: "10px",
        paddingBottom: "10px",
        fontFamily: "Secular One",
      }}
    >
      <div className="lines" style={{ display: "flex", gap: "15px" }}>
        <a
          className="links_webs"
          href="https://www.facebook.com/people/TresDe-ArtPrints/pfbid0259xKQqZvoY15gtKFUYsmLHMDJZm254RV4sXtFnU6YzFbdwJdguvLUzJbA2mmtDDTl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon fontSize="large" />
        </a>
        <a
          className="links_webs"
          href="https://www.instagram.com/3DartPrints"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon fontSize="large" />
        </a>
        <a
          className="links_webs"
          href="https://www.youtube.com/channel/UC_1AEuqtDM96W7wH5U_RubA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTubeIcon fontSize="large" />
        </a>
        <a
          className="links_webs"
          href="https://twitter.com/3DartPrints"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon fontSize="large" />
        </a>
      </div>
      <Divider sx={{ backgroundColor: "white", width: "90%", mt: 1 }} />
      <Link to="/">
        <img
          src="https://i.postimg.cc/cLL1jDG2/LOGO.png"
          alt="Logo"
          style={{ width: "100px", marginTop: "13px" }}
        />
      </Link>
      <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
        Copyright &copy; 2023 3DartPrints
      </Typography>
      <div style={{}}>
        <span style={{ color: "white", marginRight: "15px" }}>
          Información legal
        </span>
        <span
          style={{
            color: "white",
            borderLeft: "1px solid white",
            paddingLeft: "15px",
          }}
        >
          <a
            href="/politica-de-privacidad"
            style={{ color: "white", textDecoration: "none" }}
          >
            Política de privacidad
          </a>
        </span>
      </div>
    </Card>
  );
}
