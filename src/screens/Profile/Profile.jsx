import Header from "../../shared/Header/Header";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import Collections from "./components/Collections/Collections";

import api from '../../api'

import { useState, useEffect } from "react";

export default function Profile() {

  const [profileInfo, setProfileInfo] = useState({
    "username": "",
    "fist_name": "",
    "last_name": "",
    "email": ""
  });

  const [statistics, setStatistics] = useState({
    "per_day": 0,
    "per_month": 0,
    "per_year": 0,
    "anytime": 0
  });

  const [collections, setCollections] = useState([]);

  const getProfileInfo = async () => { 
    api.get('/users/user')
    .then(response => {
      setProfileInfo(response.data);
    })
  }

  const getStat = async () => {
    const username = profileInfo['username'];
    if (username){
      await api.get(`/users/user/${username}`)
      .then(response => {
        setStatistics(response.data['statistics']);
      })
    }
  }

  const getCollections = async () => {
    await api.get(`/collections/user/${profileInfo['username']}`)
    .then(response => {
      setCollections(response.data);
    })
  }

  useEffect(() => {
    getProfileInfo();
  }, []);

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
            <ProfileInfo profileInfo={profileInfo} statistics={statistics}></ProfileInfo>
          </ProfileSection>
          <ProfileSection>
            <Collections collections={collections}></Collections>
          </ProfileSection>
        </div>
      </MainWrapper>
    </>
  );
}
