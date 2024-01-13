import axios from "axios";

export const fetchSelectionsData = (setTracks, setIsLoading, params) => {

    const apiURL = "https://skypro-music-api.skyeng.tech/catalog/selection/";
    const fetchData = async () => {
        try {
            const response = await axios.get(apiURL);
            if (params.id) {
                setTracks((response.data)[params.id - 1].items);
            } else {
                setTracks((response.data)[0].items);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    fetchData()
        .then(() => {
            setIsLoading(false)
        })
}
