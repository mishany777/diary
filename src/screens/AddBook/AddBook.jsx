import Header from "../../shared/Header/Header";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import CoverBlock from "../AddBook/components/CoverBlock/CoverBlock";
import AddBlock from "../AddBook/components/AddBlock/AddBlock";

export default function AddBook() {
  return (
    <>
      <Header></Header>
      <div className="test">
        <MainWrapper>
          <CoverBlock></CoverBlock>
          <AddBlock></AddBlock>
        </MainWrapper>
      </div>
    </>
  );
}
