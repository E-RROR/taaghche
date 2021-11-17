import { Spliter } from "../Spliter/Spliter.component";
import LeafImage from "../../images/leaf-green.svg";

export function BottomSheet() {
    return (
        <div className="bottom__sheet">
            <Spliter
                right={
                    <Spliter
                        left={<img className="mt2" src={LeafImage} alt="leaf" width="25%" />}
                        right={
                            <div className="mt2">
                                <span style={{fontSize: 10,marginRight: 15}}>برگ مورد نیاز :</span>
                                <span style={{fontSize: 15,fontWeight: 'bold'}}>۴۰۰</span>
                            </div>
                        }
                    />
                }
                left={<p>test</p>}
            />
        </div>
    );
};