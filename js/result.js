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
const resultScors = document.getElementById("result");
const overallScoreRating = document.getElementById("overallScoreRating");
const mathScoreRating = document.getElementById("mathScoreRating");
const informaticsScoreRating = document.getElementById("informaticsScoreRating");

overallScoreRating.addEventListener("click", async () => {
    const response = await fetchDataResults("общий");
    if (!response) {
        return null;
    }
    for (let i in response){
        renderUl(i, response[i])
    }
});

mathScoreRating.addEventListener("click", async () => {
    const response = await fetchDataResults("математика");
    if (!response) {
        return null;
    }
    for (let i in response){
        renderUl(i, response[i])
    }
});

informaticsScoreRating.addEventListener("click", async () => {
    const response = await fetchDataResults("информатика");
    if (!response) {
        return null;
    }
    for (let i in response){
        renderUl(i, response[i])
    }
});

//
// async function getResults(subject) {
//     const results = await fetchDataResults(subject);
//     for (let i in results){
//         renderUl(i, results[i])
//     }
// }

function renderUl(number, result){
    console.log(result)
    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    li1.innerHTML = parseInt(number) + 1;
    ul.append(li1);
    let li2 = document.createElement('li');
    li2.innerHTML = result.login[0].toUpperCase() + result.login.slice(1);
    ul.append(li2);
    let li3 = document.createElement('li');
    li3.innerHTML = result.scores;
    ul.append(li3);
    resultScors.append(ul);
}

const fetchDataResults = async (subject) => {
    try {
        const result = await
            fetch(`https://localhost:7238/rating/global?count=10`, {
                method: 'GET',
                headers: {
                    Authorization: "Bearer " + token
                }
            });
        return await result.json();
    } catch (error) {
        console.error(error);
    }
}