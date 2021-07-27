import { cover3, cover18, cover16, cover7, cover13 } from "../../../assets/art";
import Page from "../Page/Page";



const Continue = () => {
  const downloads = [
    { image: cover3, title: "blackhat", original: false, duration: "25%", year: 2015 },
    { image: cover18, title: "Warrior", original: true, duration: "15%", year: 2019 },
    { image: cover16, title: "The Little Things", original: true, duration: "59%", year: 2021 },
    { image: cover7, title: "The Nanny", original: false, duration: "59%", year: 1993 },
    { image: cover13, title: "Tenet", original: false, duration: "59%", year: 2020 },
  ];
  return (
    <div>
      <Page page={downloads} />
    </div>
  );
};

export default Continue;
