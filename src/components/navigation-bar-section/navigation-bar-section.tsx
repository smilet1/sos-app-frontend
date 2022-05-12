import { useEffect, useState } from "react";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { Box, RandomElement } from "./navigation-bar-section.styles";

export const NavigationBarSection = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    useEffect(() => {
        console.log(selectedIndex);
    }, [selectedIndex]);

    return (
        <Box>
            <RandomElement isSelected={selectedIndex === 0} onClick={() => setSelectedIndex(0)}>aaaa</RandomElement>
            <RandomElement isSelected={selectedIndex === 1} onClick={() => setSelectedIndex(1)}>bbb</RandomElement>
            <RandomElement isSelected={selectedIndex === 2} onClick={() => setSelectedIndex(2)}>cccc</RandomElement>
            <RandomElement isSelected={selectedIndex === 3} onClick={() => setSelectedIndex(3)}>ddd</RandomElement>
            <RandomElement isSelected={selectedIndex === 4} onClick={() => setSelectedIndex(4)}>eeee</RandomElement>
        </Box>
    );
}