import CassocHeader from "../../components/CassocHeader";
import CassocItem from "../components/cassoc/CassocItem";

const CasSoc = () => {
    return (
        <div className="relative">
            <div>
                <CassocHeader />
            </div>
            <div>
                <CassocItem />
            </div>
        </div>
    );
}

export default CasSoc;