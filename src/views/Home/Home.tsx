import { BasicList } from "../../components/common/BasicList";
import { Section } from "../../components/common/Section";
import { Text } from "../../components/common/Text";
import { Header } from "../../components/Header/Header";

import { CHARACTERIZES_US, THANKS_TO_US, WE_WILL_DO_IT_FOR_YOU } from "../../utils/data.util";

export const Home = () => {
    return (
        <div className="main__content home">
            <Header />
            <Section title="Biuro rachunkowo-ubezpieczeniowe Andrzej Dziurman">
                <Text>
                    świadczy kompleksowe usługi księgowe dla firm, oferuje także ubezpieczenia zdrowotne, majątkowe i komunikacyjne. Biuro ubezpieczeniowe organizuje również szkolenia BHP. Biuro rachunkowe swoje usługi świadczy dla firm i osób prywatnych na terenie Krakowa i okolic.
                </Text>
            </Section>
            <Section title="Dzięki nam:">
                <BasicList list={THANKS_TO_US} />
            </Section>
            <Section title="Cechuje nas:">
                <BasicList list={CHARACTERIZES_US} />
            </Section>
            <Section title="Zrobimy to za Ciebie:">
                <BasicList list={WE_WILL_DO_IT_FOR_YOU} />
            </Section>
            <Section title="O firmie">
                <Text>
                    Nasze biuro rachunkowo-ubezpieczeniowe jest znanym, profesjonalnym i dynamicznie rozwijającym się biurem obsługi małych i średnich firm. Działamy z licencją ministra finansów począwszy od marca 1999 r. Jesteśmy firmą świadczącą kompleksowe usługi na rzecz innych przedsiębiorstw w zakresie usługowego prowadzenia ksiąg, rozliczania ubezpieczeń społecznych, prowadzenia i zarządzania kadrami, doradztwa podatkowego, prawnego – gospodarczego, doradztwa inwestycyjnego, projektowania inwestycyjnego, zawierania ubezpieczeń majątkowych i komunikacyjnych i osobowych, kojarzenia klientów oraz obsługi BHP.   Pracujemy z powodzeniem już ponad 15 lat w oparciu o najnowsze środki techniki, korzystając ze sprzętu informatycznego i przekazu internetowego oraz sprawdzonych oprogramowań i sprawnych procedur.

                    Biuro księgowe posiada obowiązkowe ubezpieczenie zawodowe odpowiedzialności cywilnej na wykonywane usługi rachunkowe.

                    Współpracujemy z ekspertami, specjalistami z dziedziny ekonomii, finansów, ubezpieczeń, prawa cywilnego, gospodarczego, podatkowego i bankowego.

                    Nasza działalność to życzliwa, konkretna i zorientowana pomoc w problemach, z którymi spotykają się właściciele małych firm.

                    Naszą dewizą jest jakość obsługi, która daje gwarancję sukcesu i powodzenia nie tylko nam, ale przede wszystkim obsługiwanym przez nas klientom.
                </Text>
            </Section>
        </div>
    );
} ;