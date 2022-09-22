import { ReactNode } from "react";
import { Text } from "./Text";

interface Props {
    icon: ReactNode,
    title: string;
    value: string;
}

export const SectionItem = ({ icon, title, value }: Props) => {
    return (
        <div className="main__section-item section-item">
            {icon}
            <h3 className="section-item__title">{title}</h3>
            <Text className="section-item__value">
                {value}
            </Text>
        </div>
    );
};