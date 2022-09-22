import { ComplexList } from "../../components/common/ComplexList";
import { Section } from "../../components/common/Section";
import { Text } from "../../components/common/Text";
import { INSURANCE } from "../../utils/data.util";

export const Insurance = () => {
    return (
        <div className="main__content insurance">
            <Text>
                Oferujemy kompleksową ochronę ubezpieczeniową naszych klientów, majątku ich firm i mieszkań, domów jednorodzinnych, a także budynków gospodarczych oraz obiektów małej architektury. Ubezpieczamy wszystkie samochody naszych klientów w zakresie zdarzeń komunikacyjnych. W zależności od indywidualnych potrzeb Ubezpieczającego istnieje możliwość kształtowania zakresu ubezpieczenia poprzez wybór oferowanych ryzyk, co umożliwia dopasowanie umowy do potrzeb Klienta.
            </Text>
            <Section title="W ramach proponowanej oferty ubezpieczenia obejmują  szkody powstałe w skutek:">
                <ComplexList list={INSURANCE} />
            </Section>
        </div>
    );
};