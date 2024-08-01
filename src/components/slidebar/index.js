import React, { useEffect, useState } from "react";
import "./slidebar.css";
import SidebarButton from "./sidebarButton";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import apiClient from "../../spotify";

export default function Slidebar() {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1625332787937-e7886ed5e665?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDZ8fHxlbnwwfHx8fHw%3D"
  );

  useEffect(() => {
    apiClient.get("me").then((response) => {
      if (response.data.images[0]) {
        setImage(response.data.images[0].url);
      }
    });
  }, []);
  return (
    <div className="slidebar-container">
      <img src={image} className="profile-img" alt="profile" />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
}
