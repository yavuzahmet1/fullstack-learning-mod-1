import axios from "axios";
import { displayCoin } from "./display.Coin";



// export const getCoin = (input) => {
//     console.log("get coin worked", input)
//     const url = `https://api.coinranking.com/v2/coins?search=${input}`

//     const options = {
//         headers: {
//             'x-access-token': 'coinranking26fa8d64ebab392abd7234e0c000118965ffe66f7bd8a142',
//         },
//     };

//     fetch(url, options)
//         .then((response) => response.json())
//         .then((result) => console.log(result));
// }
// export const getCoin = async (input) => {
//     const url = `https://api.coinranking.com/v2/coins?search=${input}`

//     const options = {
//         headers: {
//             'x-access-token': 'coinranking26fa8d64ebab392abd7234e0c000118965ffe66f7bd8a142',
//         },
//     };
//     const response = await fetch(url, options);
//     const coinData = await response.json();
//     console.log(coinData)
// }
export const getCoin = async (input) => {
    const url = `https://api.coinranking.com/v2/coins?search=${input}`

    const options = {
        headers: {
            'x-access-token': 'coinranking26fa8d64ebab392abd7234e0c000118965ffe66f7bd8a142',
        },
    };
    const responseWithAxios = await axios(url, options)
    console.log(responseWithAxios.data.data.coins)

    if (!responseWithAxios.data.data.coins.length) {
        console.log("Not found coin")
    } else {
        // console.log("found coin : ", responseWithAxios.data.data.coins[0].name)
        displayCoin(responseWithAxios.data.data.coins[0])
    }
}
