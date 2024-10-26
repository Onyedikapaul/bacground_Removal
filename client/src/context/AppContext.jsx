import { createContext, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false);

    const [credit, setCredit] = useState(false)
    const [userData, setUserData] = useState(false);
    const [image, setImage] = useState(false)

    const loadCreditsData = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/user/credits', { headers: { token } })
            if (data.success) {
                setCredit(data.credits)
                console.log(data.credits);
                
            }

        } catch (error) {
           console.log(error);
           toast.error(error.message);
        }
    }

    const loadUserProfileData = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/user/user-profile', { headers: { token } })
            if (data.success) {
                setUserData(data.userData);
                console.log(data.userData);
                
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    const removeBg = async (image) => {
         try {


            
         } catch (error) {
            console.log(error);
            toast.error(error.message);
         }
    }


    const value = {
        backendUrl,
        token, setToken,
        credit, setCredit,
        loadCreditsData,
        userData, setUserData,
        loadUserProfileData,
        image, setImage,
        removeBg
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;