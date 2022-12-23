// const resultScors = document.getElementById("result");
//
// const fetchDataResults2 = async () => {
//     try {
//         const result = await
//             fetch(`https://localhost:7238/rating/global`);
//         return await result.json();
//     } catch (error) {
//         console.error(error);
//     }
// }
//
// async function getResults() {
//     const results = [
//         {
//             "id": 3,
//             "name": "arman",
//             "scores": 19
//         },
//         {
//             "id": 5,
//             "name": "anny",
//             "scores": 17
//         },
//         {
//             "id": 13,
//             "name": "dmitriy",
//             "scores": 17
//         },
//         {
//             "id": 4,
//             "name": "nikita",
//             "scores": 16
//         },
//         {
//             "id": 8,
//             "name": "lana",
//             "scores": 13
//         },
//         {
//             "id": 7,
//             "name": "igor",
//             "scores": 11
//         },
//         {
//             "id": 11,
//             "name": "igor",
//             "scores": 11
//         },
//         {
//             "id": 9,
//             "name": "lauren",
//             "scores": 6
//         },
//         {
//             "id": 6,
//             "name": "masha",
//             "scores": 4
//         },
//         {
//             "id": 10,
//             "name": "gocha",
//             "scores": 4
//         },
//         {
//             "id": 12,
//             "name": "marina",
//             "scores": 4
//         },
//         {
//             "id": 14,
//             "name": "vladimir",
//             "scores": 2
//         }
//     ];
//         // await fetchDataResults();
//     console.log(results)
//     for (let i in results){
//         renderUl(i)
//         console.log(i)
//     }
// }
//
// function renderUl(result){
//     let ul = document.createElement('ul');
//     for (i in result){
//         let li = document.createElement('ul');
//         li.innerHTML = "i";
//         ul.append(li);
//     }
//     resultScors.append(ul);
// }
