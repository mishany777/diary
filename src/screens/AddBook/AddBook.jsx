import Header from "../../shared/Header/Header";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import CoverBlock from "../AddBook/components/CoverBlock/CoverBlock";
import AddBlock from "../AddBook/components/AddBlock/AddBlock";
import { useState, useEffect } from "react";
import api from '../../api'

import { useNavigate } from "react-router-dom";

export default function AddBook() {

  const navigate = useNavigate();

  const [bookInfo, setBookInfo] = useState({
    "author": "",
    "title": "",
    "rating": null,
    "retelling": "",
    "pages": null,
    "start_date": null,
    "finish_date": null,
    "private": false
  });
  const [notes, setNotes] = useState([
    {
      "text": "",
      "private": false
    }
  ]);

  const changeNote = (index, note) => {
    const newNotes = notes.map((item, i) => (i === index ? note : item));
    setNotes(newNotes);
  }
  const addNote = () => {
    setNotes([...notes, { "text": "", "private": false }]);
  };
  const changeBookInfo = (key, value) => {
    const info = {...bookInfo};
    info[key] = value;
    console.log("changed");
    setBookInfo(info);
    console.log(bookInfo);
  }
  const checkFields = () => {
    for (let key in bookInfo) {
      if (key !== "private" && !bookInfo[key]){
        alert("Заполните все поля!");
        return false;
      }
      if (bookInfo['start_date'] > bookInfo['finish_date']) {
        alert("Дата окончания не может быть раньше даты начала!");
        return false;
      }
    }
    return true;
  }
  const getGoodNotes = () => {
    let newNotes = [];
    notes.map((note) => {
      if (note.text) {
        newNotes.push(note);
      }
    })
    return newNotes;
  }

  const createBook = async () => {
    const checkedFields = checkFields();
    if (checkedFields) {
      await api.post("books/create_or_update/", bookInfo)
      .then(res => {
        const data = res.data;
        const book_id = data["book_id"];
        createNotes(book_id);
      })
      .catch(err => {
        alert(err);
      })
    }
  }

  const createNotes = async (book_id) => {
    const dataNotes = getGoodNotes();
    if (dataNotes.length > 0) {
      await api.post(`/books/${book_id}/notes/add`, dataNotes)
      .then(res => {
        navigate("/mybooks");
      })
      .catch(err => {
        alert(err);
      })
    }
    
  }

  useEffect(() => {
    document.title = "Создание книги";
  }, []);

  return (
    <>
      <Header></Header>
      <div className="test">
        <MainWrapper>
          <CoverBlock createBook={createBook}></CoverBlock>
          <AddBlock
            notes={notes} 
            changeNote={changeNote} 
            addNote={addNote} 
            bookInfo={bookInfo} 
            changeBookInfo={changeBookInfo}
          ></AddBlock>
        </MainWrapper>
      </div>
    </>
  );
}
