import { cover1, cover9, cover20, cover12, cover11 } from "../../../assets/art";
import Page from "../Page/Page";


const MyList = () => {
  const myList = [
    { image: cover1, title: "Euphoria", original: true, duration: "10%", year: 2021 },
    { image: cover9, title: "Scream", original: false, duration: "85%", year: 1996 },
    { image: cover20, title: "WW84", original: false, duration: "19%", year: 2020 },
    { image: cover12, title: "Stuart Little", original: false, duration: "5%", year: 1999 },
    { image: cover11, title: "Space Jam", original: false, duration: "25%", year: 1999 },
  ];
  return (
    <div>
      <Page page={myList} />
    </div>
  );
};

export default MyList;
