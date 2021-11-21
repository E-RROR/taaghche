import CloseImage from "../../images/close.png";

export function Modal({
    children,
    display,
    changeDisplay
}) {
    if (display) {
        return (
            <div className="modal__container">
                <div className="modal__body">
                    <div className="close__button" onClick={changeDisplay}>
                        <img src={CloseImage} alt="close" width="20" className="mt5 mr5" />
                    </div>
                    {children}
                </div>
            </div>
        );
    } else {
        return <></>
    }
};