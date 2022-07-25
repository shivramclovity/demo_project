import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Checklogoutbrowser = () => {
    const logofftime = 1430;
    let loggedoff = false;
    const navigate = useNavigate();
    const checklogout = () => {
        if (localStorage.getItem("userlogin") !== null) {
            const logintime = new Date(localStorage.getItem("userlogin"));
            const currentime = new Date();
            let diffInMs = Math.abs(currentime - logintime);
            diffInMs = diffInMs / (1000 * 60);

            if (Math.floor(diffInMs) >= logofftime) {
                if (!loggedoff) {
                    loggedoff = true;
                    localStorage.removeItem("userlogin")
                }
            }
        }
    }
    useEffect(() => {
        if (loggedoff) {
            navigate("/logout", { replace: true });

        }

    }, [navigate, loggedoff]);
    return {
        checklogout
    }

}

export default Checklogoutbrowser;