// export function getPosts() {
//     fetch('/json/posts.json'
//         , {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }
//         }
//     )
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (myJson) {
//             // data = myJson;
//             // setData(myJson.map((p) => (p.judul)));
//             console.log(myJson)
//             // console.log(data)
//             return myJson;
//         });
//     // console.log(data)
//     // return await data
// }

export async function getPosts() {
    const res = await fetch('http://localhost:3000/json/posts.json')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}