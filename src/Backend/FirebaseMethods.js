import { database } from "./FirebaseConfig";
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';

export const userLogin = async (email, password) => {
    try {
        const data = collection(database, "users");
        const userList = await getDocs(data);

        let isUserExists;

        userList.docs.map(user => {
            if (user.data().email === email && user.data().password === password) {
                isUserExists = true;
            }
        });

        if (isUserExists === true) {
            return "User found successfully";
        } else {
            return "No such user exists";
        }
    } catch (e) {
        console.log(e);
    }
}


export const registerNewUser = async (name, email, password) => {
    try {
        const data = collection(database, "users");
        const userList = await getDocs(data);

        let isUserExists;

        userList.docs.map(user => {
            if ((user.data().email === email)) {
                console.log("in singUpUser, user already exists");
                isUserExists = true;
            }
        });

        if (isUserExists === true) {
            return "User already exists";
        } else {
            await addDoc(data, {
                name: name,
                email: email,
                password: password,
                amount: 100000
            });

            return "User created successfully";
        }
    } catch (e) {
        console.log(e);
    }
}

export const getTradableAmount = async (email) => {
    try {
        const data = collection(database, "users");
        const userList = await getDocs(data);

        let amount;

        userList.docs.map(user => {
            if ((user.data().email === email)) {
                amount = user.data().amount;
            }
        });

        return amount;
    } catch (e) {
        console.log(e);
    }
}

export const loadAllCryptos =async() => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr";
    const options = { method: "GET", headers: { accept: "application/json" } };

    const cryptoData = await fetch(url, options);
    const cryptoDataJSON = await cryptoData.json();

    let allCryptos = [];
    
    cryptoDataJSON.map((crypto) => {
        // console.log(crypto);
        let cryptoData = {};

        cryptoData.name = crypto.id;
        cryptoData.symbol = crypto.symbol;
        cryptoData.icon = crypto.image;
        cryptoData.currentPrice = crypto.current_price;
        cryptoData.close = crypto.low_24h
        cryptoData.high = crypto.high_24h

        allCryptos.push(cryptoData);
    })

    // console.log("all cryptos :");

    // allCryptos.map((crypto) => {
    //     console.log(crypto);
    // })

    return allCryptos;

}
