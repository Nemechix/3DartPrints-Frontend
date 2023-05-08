import { Card, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Footer.css"

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
        backgroundColor: "#2f466c",
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
          href="https://www.facebook.com/3DartPrints"
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
          href="https://www.youtube.com/3DartPrints"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTubeIcon fontSize="large" />
        </a>
        <a
          className="links_webs"
          href="https://www.twitter.com/3DartPrints"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon fontSize="large" />
        </a>
      </div>
      <img
        src="/3DArts_Logo_TRIM.png"
        alt="Logo"
        style={{ width: "100px", marginTop: "13px" }}
      />
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
