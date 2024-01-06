import axios from "axios";

export const fetchMainData = (setIsLoading, setTracks) => {
    const apiURL = "https://skypro-music-api.skyeng.tech/catalog/track/all/";
    const fetchData = async () => {
        try {
            const response = await axios.get(apiURL);
            setTracks(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    fetchData()
        .then(() => setIsLoading(false))
}