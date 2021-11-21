import {Header} from "../components/Header/Header.component";
import {Container} from "../components/Container/Container.component";
import {Spliter} from "../components/Spliter/Spliter.component";
import {Texts} from "../components/PrizeTexts/Texts.component";
import {Image} from "../components/Image/Image.component";
// import {Buttons} from "../components/Buttons/Buttons.component";
import {BottomSheet} from "../components/Sheet/BottomSheet.component";
import { Modal } from "../components/Modal/Modal.component";
import { useSelector } from 'react-redux';
import {Card} from "../components/Cards/Card.component";

export function Prize() {

    const leafs = useSelector((state) => state.leafs.value);

    return (
        <>
            <Modal display>
                <Spliter
                    right={<p>تبریک</p>}
                    left={<Card />}
                />
            </Modal>

            <Header />

            <Container>
                <Spliter
                    right={(
                        <>
                            <Image 
                                imageSrc="https://img.taaghche.com/logo/reward-sub-off-40.svg"
                            />
                        </>
                    )}
                    left={<Texts />}
                    mobileOne
                />
            </Container>

            <BottomSheet />
        </>
    )
};