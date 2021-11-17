export function Image({
    imageSrc: url
}) {
    return (
        <div 
            className="image"
            alt="taaghche"
            style={{backgroundImage: `url(${url})`}}
        ></div>
    );
};