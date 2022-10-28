fetch("https://express-app-coral.vercel.app/done")
.then(data => data.json())
.then(data => {
        console.log(data)
        const body = document.getElementsByTagName("body")[0]
        const element = document.createElement("div")

        console.log("Element: ", element)
        element.innerHTML = data.Done
        body.appendChild(element)
    }
)
.catch(error => console.log("Error: ", error))

