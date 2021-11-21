import {ButtonDisabled} from './ButtonDisabled.component';
import {ButtonArrow} from './ButtonArrow.component';

export function Buttons({
    status
}) {
    switch(status) {

        case 'disabled':
            return (
                <ButtonDisabled text={' داداش این دکمه غیر فعاله'} />
            );

        case 'arrow':
            return (
                <ButtonArrow text={'مشاهده و دریافت'} />
            );

        default:
            return (
                <ButtonDisabled text={' داداش این دکمه غیر فعاله'} />
            );
    };
};