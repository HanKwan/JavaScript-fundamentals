// daily tasks
function goSupermarket() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const wentSupermarket = true;

            if (wentSupermarket) {
                resolve("Go to supermarket ✅");
            } else {
                reject("Didn't go to supermarket");                
            }
        }, 2000);
    })
}

function goToSchool() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const wentToSchool = false;

            if (wentToSchool) {
                resolve("Go to school ✅");
            } else {
                reject("Didn't go to school");
            }
        }, 3000);
    })
}

function doHomework() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const didHomework = true;

            if (didHomework) {
                resolve("Do homework ✅");
            } else {
                reject("Didn't do homework");
            }
        }, 1500);
    })
}

// goSupermarket()
//     .then(value => {
//         console.log(value);
//         return goToSchool();
//     })
//     .then(value => {
//         console.log(value);
//         return doHomework();
//     })
//     .then(value => {
//         console.log(value);
//         console.log("All tasks done");
//     })
//     .catch(error => console.error(error))

// async-await
async function doTasks() {

    try {
        const value1 = await goSupermarket();
        console.log(value1);
        
        const value2 = await goToSchool();
        console.log(value2);
        
        const value3 = await doHomework();
        console.log(value3);

        console.log("All work done");
        
    } catch (error) {
        console.error(error);        
    }
}

doTasks();