function DateCard(props) {
    // array of days of week with key of day number and value of day name
    const days = [
        {
            key: 11,
            value: 'ش'
        },
        {
            key: 12,
            value: 'ی'
        },
        {
            key: 13,
            value: 'د'
        },
        {
            key: 14,
            value: 'س'
        },
        {
            key: 15,
            value: 'چ'
        },
        {
            key: 16,
            value: 'پ'
        },
        {
            key: 17,
            value: 'ج'
        }
    ];

    return days.map(day => {
        return (
            <div className="item" key={day.key}>
                <p className="text">
                    {day.value}
                </p>
                <p className="number">
                    {day.key}
                </p>
            </div>
        );
    });
};

export function Time() {
    return (
        <div className="time__bg">
            <div className="col">
                <div className="carousel">
                    <div className="item">{"<"}</div>
                    <DateCard />
                    <div className="item">{">"}</div>
                </div>
            </div>
            <div className="col">
                <h1>Hi</h1>
            </div>
        </div>
    );
};