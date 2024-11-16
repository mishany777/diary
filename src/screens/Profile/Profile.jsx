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
  const [statistics, setStatistics] = useState({});
  const [collections, setCollections] = useState([]);

  const getStat = async () => {
    const username = user.username;
    if (username){
      await api.get(`/users/user/${username}`)
      .then(response => {
        setStatistics(response.data['statistics']);
      })
    }
  }

  const getCollections = async () => {
    const username = user.username;
    if (username){
      await api.get(`/collections/user/${username}`)
      .then(response => {
        setCollections(response.data);
      });
    }
  }
  // const getStat = async () => {
  //   const username = profileInfo.username;
  //   if (username){
  //     await api.get(`/users/user/${username}`)
  //     .then(response => {
  //       setStatistics(response.data['statistics']);
  //     })
  //   }
  // }

  // const getCollections = async () => {
  //   const username = profileInfo.username;
  //   if (username){
  //     await api.get(`/collections/user/${username}`)
  //     .then(response => {
  //       setCollections(response.data);
  //     });
  //   }
  // }

  // useEffect(() => {
  //   setProfileInfo(user);
  // }, [user]);

  // useEffect(() => {
  //   getStat();
  //   getCollections();
  // }, [profileInfo]);

  useEffect(() => {
    getStat();
    getCollections();
  }, [user]);

  return (
    <>
      <Header />
      <MainWrapper>
        <div className="test">
          <ProfileSection>
            {user ? <ProfileInfo profileInfo={user} statistics={statistics}></ProfileInfo> : <p>loading</p>}
          </ProfileSection>
          <ProfileSection>
            {user ? <Collections collections={collections}></Collections> : <p>loading</p>}
          </ProfileSection>
        </div>
      </MainWrapper>
    </>
  );
}
