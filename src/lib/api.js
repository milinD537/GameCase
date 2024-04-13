export const getGames = async(page) => {
    try {
        const API_KEY = import.meta.env.VITE_API_KEY
        console.log(API_KEY);
        const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`,
            {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            }
        )
    
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(e) {
        console.log("Error in fetching games: " + e);
        return null;
    }
}