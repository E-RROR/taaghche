import { useSelector } from "react-redux";

export function Leaf() {

    const leafs = useSelector(state => state.leafs.value);

    return (
        <div className="leafs__container">
            <p>{leafs} برگ</p>
        </div>
    )
};