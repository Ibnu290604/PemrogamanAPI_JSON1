import hpData from "../../public/data/HP_SAMSUNG.json"; // Sesuaikan dengan path JSON
import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

interface IHP {
  IdHP: string;
  Nama: string;
  Chipset: string;
  Internal: string;
  RAM: string;
}

const HPList = () => {
  const handphones: IHP[] = hpData["HP_SAMSUNG"]; // Menggunakan notasi bracket

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">POSTINGAN PAGE</h1>
      {handphones.map((hp) => (
        <CardList key={hp.IdHP}>
          <p>{hp.Nama}</p>
          <i>Chipset: {hp.Chipset}</i>
          <p>Internal Memory: {hp.Internal} GB</p>
          <p>RAM: {hp.RAM} GB</p>
          <ViewUserButton userId={hp.IdHP} />
        </CardList>
      ))}
    </>
  );
};

export default HPList;
