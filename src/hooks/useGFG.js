import { useEffect, useState } from "react"

const useGFG = (name)=>{
    const [profile,setProfile] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState();

    useEffect(()=>{
        const fetchProfile = async ()=>{
            try{
                setLoading(true);
                const response = await fetch(`https://gfg-api-1.onrender.com/${name}`);
                const profile = await response.json();
                setProfile(profile);
            }catch(error){
                console.log(error);
                setError("error fetching profile!");
            }
            finally{
                setLoading(false);
            }
        }
        fetchProfile();
    },[name])

    return {profile,loading,error};
}

export default useGFG;