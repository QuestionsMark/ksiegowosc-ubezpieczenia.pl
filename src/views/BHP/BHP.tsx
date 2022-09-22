import { BasicList } from "../../components/common/BasicList";
import { ComplexList } from "../../components/common/ComplexList";
import { Section } from "../../components/common/Section";
import { BHP_OFFER, TRAINING_BHP } from "../../utils/data.util";

export const BHP = () => {
    return (
        <div className="main__content bhp">
            <Section title="Oferujemy pełen zakres usług BHP:">
                <BasicList list={BHP_OFFER} />
            </Section>
            <Section title="Nasza firma proponuje profesjonalne usługi w zakresie:">
                <ComplexList list={TRAINING_BHP} />
            </Section>
        </div>
    );
}