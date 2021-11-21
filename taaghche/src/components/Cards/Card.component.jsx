import {Spliter} from "../Spliter/Spliter.component";
import {Buttons} from "../Buttons/Buttons.component";

export function Card({
    status,
    expireTime,
    leaf,
    id,
    img,
}) {
    return (
        <div className="card__container">   
            <div 
                className="card__img" 
                style={{
                    backgroundImage: `url('https://img.taaghche.com/logo/reward-sub-off-40.svg')`
                }}
            ></div>
            <div 
                className="card__img__dots" 
                style={{
                    backgroundImage: `url('https://taaghche.com/images/rooyesh/Dots.svg')`
                }}
            ></div>
            <Spliter
                right={
                    <div>
                        <span style={{fontSize: 10,marginRight: '15%'}}>برگ مورد نیاز :</span>
                        <span style={{fontSize: 25,fontWeight: 'bold',marginRight: 10}}>۴۰۰</span>
                    </div>
                }
                left={<Buttons status='arrow' />}
            />
        </div>
    );
};