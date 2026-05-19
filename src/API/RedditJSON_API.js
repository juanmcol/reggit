export const redditAPI = {
    urls: {
        popular: "https://www.reddit.com/r/popular.json"
    },
    fetchPopular: async () => {
        try {
            const response = await fetch("https://www.reddit.com/r/popular.json");
            if (!response.ok) {
                throw new Error(`Response Status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
            const posts = result.data.children.map(obj => obj.data);
            return posts;
        } catch (error) {
            console.log(error.message);
        }
    },
    fetchByQuery: async(queryUrl) => {
        try {
            const response = await fetch(queryUrl);
            if (!response.ok) {
                throw new Error(`Response Status: ${response.status}`);
            }

            const result = response;
            console.log(result);
        } catch (error) {
            console.log(error.message);
        }
    }
}