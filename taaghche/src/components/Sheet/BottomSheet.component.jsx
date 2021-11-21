import {Spliter} from "../Spliter/Spliter.component";
import {Buttons} from "../Buttons/Buttons.component";

export function BottomSheet() {
    return (
        <div className="bottom__sheet">
            <Spliter
                right={
                    <div>
                        <span style={{fontSize: 10,marginRight: '15%'}}>برگ مورد نیاز :</span>
                        <span style={{fontSize: 25,fontWeight: 'bold',marginRight: 10}}>۴۰۰</span>
                    </div>
                }
                left={<Buttons />}
            />
        </div>
    );
};