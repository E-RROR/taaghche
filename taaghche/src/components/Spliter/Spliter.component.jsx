export function Spliter({
    left: LeftComponent,
    right: RightComponent,
    mobileOne: responsive,
}) {
    return (
        <div class={[responsive ? 'columns' : 'columnd' ]}>
            <div class="col">{RightComponent}</div>
            <div class="col">{LeftComponent}</div>
        </div>
    );
};