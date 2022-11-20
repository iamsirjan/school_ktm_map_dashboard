import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import schooldata from "../../export.json";
import { Link } from "react-router-dom";
import DataCard from "./datacard";
const icon = new Icon({
  iconUrl: "/school.png",
  iconSize: [40, 40],
});
const Map = () => {
  return (
    <MapContainer center={[27.701, 85.315]} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* mapping the data from the json file */}
      {schooldata?.elements?.map((data, i) =>
        // showing the list which has name compulsory
        data?.lat && data?.lon && data?.tags?.name ? (
          <Marker key={i} position={[data?.lat, data?.lon]} icon={icon}>
            {/* popup tp show the details */}
            <Popup>
              <h1
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "30px",
                }}
              >
                Node{" "}
                <a
                  target="_blank"
                  style={{ textDecoration: "none", color: "inherent" }}
                  href={`https://www.openstreetmap.org/node/${data?.id}`}
                >
                  <h1
                    style={{
                      fontSize: "30px",
                      marginLeft: "10px",
                      color: "#795CB2",
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                    {data?.id}{" "}
                  </h1>{" "}
                </a>
              </h1>
              <div className="school-details-container">
                {/* dynamic props component */}
                <DataCard title="Name" data={data?.tags?.name} />
                <DataCard
                  title="Opening Hour"
                  data={data?.tags?.opening_hours}
                />
                <DataCard title="Phone Number" data={data?.tags?.phone} />
                <DataCard title="Email" data={data?.tags?.email} />
                <DataCard title="Website" data={data?.tags?.website} />
                <DataCard title="Operator" data={data?.tags?.operator} />
                <DataCard
                  title="Operator"
                  data={data?.tags?.[`operator:type`]}
                />

                <DataCard
                  title="Student Count"
                  data={data?.tags?.[`student:count`]}
                />
                <DataCard
                  title="Personnel Count"
                  data={data?.tags?.[`personnel:count`]}
                />
                <DataCard
                  title="Building Count"
                  data={data?.tags?.building_count}
                />

                <DataCard title="Wheelchair" data={data?.tags?.wheelchair} />
              </div>
            </Popup>
          </Marker>
        ) : null
      )}
    </MapContainer>
  );
};

export default Map;
