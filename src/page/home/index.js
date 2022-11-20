import React, { useEffect, useState } from "react";
import "./style.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import schooldata from "../../export.json";
import { Link } from "react-router-dom";
import DataCard from "./datacard";
import Map from "./mapcontainer";
import { Divider, Typography } from "@mui/material";
import TurnRightIcon from "@mui/icons-material/TurnRight";
const icon = new Icon({
  iconUrl: "/school.png",
  iconSize: [40, 40],
});
const Home = () => {
  return (
    <div className="home-container">
      {/* list of schools  */}
      <SchoolList />

      {/* map showing the schools location */}
      <Map />
    </div>
  );
};

export default Home;

// component for school list view
const SchoolList = () => {
  return (
    <div className="list-container">
      <Typography
        sx={{
          fontSize: "2em",
          color: "#202124",
          cursor: "pointer",
          m: 1,
          fontWeight: "bold",
        }}
      >
        {" "}
        Schools in Kathmandu{" "}
      </Typography>
      {/*mapping list of schools */}
      <div className="list-box-container">
        {schooldata?.elements?.map((data, i) =>
          data?.lat && data?.lon && data?.tags?.name ? (
            <>
              <div className="list-box">
                <div className="list-left-box">
                  <a
                    target="_blank"
                    style={{ textDecoration: "none", color: "inherent" }}
                    href={data?.tags?.website}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.3em",
                        color: "#202124",
                        cursor: "pointer",
                      }}
                    >
                      {data?.tags?.name}
                    </Typography>
                  </a>
                  <Typography sx={{ fontSize: "1em", color: "#70757a" }}>
                    {data?.tags?.operator} - {data?.tags?.phone}
                  </Typography>
                </div>

                <div className="list-right-box">
                  {/* link to the open gl map */}
                  <a
                    target="_blank"
                    style={{ textDecoration: "none", color: "inherent" }}
                    href={`https://www.openstreetmap.org/node/${data?.id}`}
                  >
                    <TurnRightIcon
                      sx={{
                        fontSize: "2em",
                        color: "#fff",
                        cursor: "pointer",
                      }}
                      className="opengl-icon"
                    />
                  </a>
                  <Typography
                    sx={{ fontSize: "1em", color: "#70757a", mt: 0.5 }}
                  >
                    Open Gl
                  </Typography>
                </div>
              </div>
              <Divider sx={{ mt: 1 }} />
            </>
          ) : null
        )}
      </div>
    </div>
  );
};
