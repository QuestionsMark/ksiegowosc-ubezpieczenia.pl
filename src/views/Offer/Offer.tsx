import { BasicList } from "../../components/common/BasicList";
import { Section } from "../../components/common/Section";
import { FROM_YOU, OFFER } from "../../utils/data.util";

export const Offer = () => {
    return (
        <div className="main__content offer">
            <Section title="Gwarantujemy usługi księgowe na najwyższym poziomie:">
                <BasicList list={OFFER} />
            </Section>
            <Section title="Od Ciebie nam wystarczy:">
                <BasicList list={FROM_YOU} />
            </Section>
        </div>
    );
};