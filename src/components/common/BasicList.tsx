interface Props {
    list: string[];
    className?: string;
    itemClassName?: string;
}

export const BasicList = ({ list, className, itemClassName }: Props) => {
    const getItems = () => {
        return list.map(i => (
            <li
                key={i}
                className={`main__list-item${itemClassName ? ' ' + itemClassName : ''}`}
            >
                {i}
            </li>
        ))
    };

    return (
        <ul className={`main__list${className? ' ' + className : ''}`}>
            {getItems()}
        </ul>
    );
};