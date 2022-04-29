import Galery from "../../components/Galery";
import DescribeLogements from "../../components/DescribeLogement";
import Footer from "../../layout/Footer";
import { logements } from "../../datas/logements";
import { useParams } from "react-router-dom";
import Error404 from "../Error404";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  if (!logement) {
    return <Error404 />;
  }

  return (
    <div id="logementPage" className="logementPage">
      <Galery pictures={logement.pictures} />
      <DescribeLogements logement={logement} />
      <Footer />
    </div>
  );
}
export default Logement;