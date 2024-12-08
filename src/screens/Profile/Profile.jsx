import Header from "../../shared/Header/Header";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import Collections from "./components/Collections/Collections";

import api from '../../api'
import { useAuth } from "../../AuthContext";

import { useState, useEffect } from "react";
import { use } from "react";

export default function Profile() {

  const { user } = useAuth();
  const [statistics, setStatistics] = useState({});

  const getStat = async () => {
    const username = user.username;
    if (username){
      await api.get(`/users/user/${username}`)
      .then(response => {
        setStatistics(response.data['statistics']);
      })
    }
  }

  useEffect(() => {
    getStat();
  }, [user]);

  useEffect(() => {
    document.title = "Профиль";
  }, []);

  return (
    <>
      <Header />
      <MainWrapper>
        <div className="test">
          <ProfileSection>
            {user ? <ProfileInfo profileInfo={user} statistics={statistics}></ProfileInfo> : <p>loading</p>}
          </ProfileSection>
          <ProfileSection>
            {statistics ? <Collections statistics={statistics}></Collections> : <p>loading</p>}
          </ProfileSection>
        </div>
      </MainWrapper>
    </>
  );
}
