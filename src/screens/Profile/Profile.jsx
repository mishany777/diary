import Header from "../../shared/Header/Header";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import Collections from "./components/Collections/Collections";

import api from '../../api'
import { useAuth } from "../../AuthContext";

import { useState, useEffect } from "react";

export default function Profile() {

  const { user } = useAuth();
  const [profileInfo, setProfileInfo] = useState(user);

  const [statistics, setStatistics] = useState({
    "per_day": 0,
    "per_month": 0,
    "per_year": 0,
    "anytime": 0
  });

  const [collections, setCollections] = useState([]);

  const getStat = async () => {
    const username = profileInfo.username;
    if (username){
      await api.get(`/users/user/${username}`)
      .then(response => {
        setStatistics(response.data['statistics']);
      })
    }
  }

  const getCollections = async () => {
    const username = profileInfo.username;
    if (username){
      await api.get(`/collections/user/${username}`)
      .then(response => {
        setCollections(response.data);
      });
    }
  }

  useEffect(() => {
    setProfileInfo(user);
  }, [user]);

  useEffect(() => {
    getStat();
    getCollections();
  }, [profileInfo]);

  return (
    <>
      <Header />
      <MainWrapper>
        <div className="test">
          <ProfileSection>
            {profileInfo ? <ProfileInfo profileInfo={profileInfo} statistics={statistics}></ProfileInfo> : <p>loading</p>}
          </ProfileSection>
          <ProfileSection>
            <Collections collections={collections}></Collections>
          </ProfileSection>
        </div>
      </MainWrapper>
    </>
  );
}
