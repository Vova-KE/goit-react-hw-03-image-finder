import axios from "axios";

const MY_API_KEY = '27785613-3c730127b1356d079421a0eb8'; 
axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['Authorization'] = MY_API_KEY;
axios.defaults.params = {
    key: MY_API_KEY,
    image_type: "photo",
    orientation: "horizontal",
    per_page: 12,
};

const getPhotos = async ({ query, page }) => {
    // console.log(query, page);
    // axios.get(query, page).then((res) => res.data)
    const {data} = await axios.get(`?query=${query}&page=${page}`);
    // console.log('data', data);
    return data;
};

export default getPhotos;
// const BASE_URL = 'https://pixabay.com/api/';
// const MY_API_KEY = '27785613-3c730127b1356d079421a0eb8';  
// const searchParams = new URLSearchParams({
//     image_type: "photo",
//     orientation: "horizontal",
//     per_page: 12,
// });

// export const fetchPhotos = async (query, page) => {
//     // const data = await fetch(`${BASE_URL}?query=${query}&page=${page}&key=${MY_API_KEY}&${searchParams}`)
//     const data = await fetch(`${BASE_URL}?query=${query}&page=${page}&key=${MY_API_KEY}&${searchParams}`)
//     return data;
// };