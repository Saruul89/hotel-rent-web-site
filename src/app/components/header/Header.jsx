import ContactAndProfile from "../ContactAndProfile";
import { LogoTraingel } from "../svg/LogoTraingel";
import SearchOutSide from "./SearchOutSide";

const Header = () => {
  return (
    <div className="container max-w-[1366px] m-auto flex gap-4">
      <LogoTraingel />
      <SearchOutSide />
      <ContactAndProfile />
    </div>
  );
};

export default Header;
