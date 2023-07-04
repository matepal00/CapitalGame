import { useModuleTranslation } from "../../utils";
import SideNav from "../SideNav/SideNav";
import {
  ChooseContinentContainer,
  Title,
  SideNavContainer,
} from "./ChooseContinent.styles";

const ChooseContinent = () => {
  const { t } = useModuleTranslation({});
  return (
    <ChooseContinentContainer>
      <Title>{t("chooseContinent.title")}</Title>
      <SideNavContainer>
        <SideNav />
      </SideNavContainer>
    </ChooseContinentContainer>
  );
};

export default ChooseContinent;
