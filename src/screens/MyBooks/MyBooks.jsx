import Header from "../../shared/Header/Header";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import SearchForm from "./components/SearchForm/SearchForm";
import ProfileSection from "../Profile/components/ProfileSection/ProfileSection";
import BooksList from "./components/BooksList/BooksList";

import { useEffect, useState } from "react";

import api from '../../api'

export default function MyBooks() {

  localStorage.removeItem("token");

  const [profileInfo, setProfileInfo] = useState({
    "username": "",
    "fist_name": "",
    "last_name": "",
    "email": ""
  });

  const getProfileInfo = async () => { 
    await api.get('/users/user')
    .then(response => {
      setProfileInfo(response.data);
    })
  }

  useEffect(() => {
    getProfileInfo();
  }, [])
  console.log(profileInfo);

  return (
    <>
      <Header></Header>
      <MainWrapper>
        <div className="test">
          <SearchForm></SearchForm>
          <ProfileSection>
            <BooksList profileInfo={profileInfo}></BooksList>
          </ProfileSection>
        </div>
      </MainWrapper>
    </>
  );
}
