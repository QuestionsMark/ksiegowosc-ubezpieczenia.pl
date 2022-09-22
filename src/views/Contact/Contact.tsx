import { Section } from "../../components/common/Section";
import { SectionItem } from "../../components/common/SectionItem";
import { Map } from "../../components/Map/Map";

import { FaPhone } from 'react-icons/fa';
import { IoIosPin, IoMdMail } from 'react-icons/io';
import { Text } from "../../components/common/Text";

export const Contact = () => {
    return (
        <div className="main__content contact">
            <Section title="Znajdź nas na mapie">
                <Map />
            </Section>
            <Section title="Skontaktuj się z nami" className="flex">
                <SectionItem icon={<IoIosPin />} title="Adres" value="ul. Kobierzyńska 23a lok.16
                30-363 Kraków" />
                <SectionItem icon={<FaPhone />} title="Telefon" value="tel.: 12 269 24 18
                kom: 501 333 677" />
                <SectionItem icon={<IoMdMail />} title="E-mail" value="biuro@ksiegowosc-ubezpieczenia.pl
                adziurman@op.pl" />
            </Section>
            <Section title="Biuro czynne:">
                <Text>
                    poniedziałek: 9:00 - 15:00
                    wtorek: 9:00 - 15:00, 17:30 - 19:30
                    środa: 9:00 - 15:00
                    czwartek: 9:00 - 15:00, 17:30 - 19:30
                    piątek: 9:00 - 15:00
                </Text>
            </Section>
        </div>
    );
};