import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NavigateUrl = (url) => {

    const navigate = useNavigate();
    console.log("url", url);
    useEffect(() => {
        // console.log(new Date());
        navigate(url);
    }, [navigate]);
}
export default NavigateUrl;