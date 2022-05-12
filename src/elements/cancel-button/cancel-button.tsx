import { useEffect, useState } from "react";
import { RandomElement } from "./cancel-button.styles";


export const CancelButton = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    useEffect(() => {
        console.log(selectedIndex);
    }, [selectedIndex]);

    return (

            <RandomElement>Отмена</RandomElement>
    );
}