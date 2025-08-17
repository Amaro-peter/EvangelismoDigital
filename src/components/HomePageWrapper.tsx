import { useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { useEffect, useState } from "react";

const HomePageWrapper = () => {
    const location = useLocation();
    const [section, setSection] = useState<string | undefined>();
    
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const sectionParam = params.get("section") || undefined;
        
        setSection(sectionParam || "artigos");
    }, [location.search]);

    return <HomePage section={section} />;
}

export default HomePageWrapper;