import { BarButton } from "../bar-button/bar-button";
import { SOSBarButton, UserButton,CallButton} from "../button"
import { SettingsButton} from "../button/SettingsButton"


export const NavigationBar = () => {
    return (
        <section className='NavigationBarFrame'>
            <BarButton />
            <SOSBarButton />
            <UserButton />
            <CallButton />
            <SettingsButton />
        </section>
    );
}