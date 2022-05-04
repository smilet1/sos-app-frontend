import { SOSBarButton, UserButton,CallButton} from "../button"
import { SettingsButton} from "../button/SettingsButton"


export const NavigationBar = () => {
    return (
        <section className='NavigationBarFrame'>
            <SOSBarButton />
            <UserButton />
            <CallButton />
            <SettingsButton />
        </section>
    );
}