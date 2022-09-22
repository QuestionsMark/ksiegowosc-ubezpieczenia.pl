import { Section } from '../common/Section';
import { Text } from './Text';

export interface ComplexItem {
    title: string;
    text: string;
}

interface Props {
    list: ComplexItem[];
    className?: string;
    itemClassName?: string;
}

export const ComplexList = ({ list, className, itemClassName }: Props) => {
    const getItems = () => {
        return list.map(i => (
            <li
                key={i.title}
                className={`main__list-item${itemClassName ? ' ' + itemClassName : ''}`}
            >
                <Section title={i.title}>
                    <Text>
                        {i.text}
                    </Text>
                </Section>
            </li>
        ))
    };

    return (
        <ul className={`main__list${className? ' ' + className : ''}`}>
            {getItems()}
        </ul>
    );
};