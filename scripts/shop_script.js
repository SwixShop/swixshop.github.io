var shopper = JSON.parse(window.localStorage.getItem("shopper"))

if (shopper == null) {
    shopper = {}
}

function shopper_func(clickedElement) {
    var id = clickedElement.getAttribute("id") 
    var mainElement = clickedElement.parentElement.parentElement.parentElement.parentElement

    var num = Number(mainElement.querySelector("#count").textContent)

    switch (id) {
        case ("addone"):
            mainElement.querySelector("#count").textContent = Math.min(++num, 20)

            shopper[mainElement.querySelector(".item-name").textContent] = [Math.min(Number(mainElement.querySelector("#count").textContent), 20), Number(mainElement.querySelector(".price").textContent.match(/\d+/g).join(""))/100]
            window.localStorage.setItem("shopper", JSON.stringify(shopper))
            
            mainElement.querySelector("#prostonado").textContent = String(shopper[mainElement.querySelector(".item-name").textContent][0] * shopper[mainElement.querySelector(".item-name").textContent][1]) + ".00₽"

            var total = 0

            Object.keys(shopper).forEach(item => {
                total += shopper[item][0] * shopper[item][1]
            });

            document.querySelector("#total-a").textContent = String(total) + ".00₽"

            return 0

        case ("removeone"):
            mainElement.querySelector("#count").textContent = Math.max(--num, 0)
            shopper[mainElement.querySelector(".item-name").textContent] = [Math.max(Number(mainElement.querySelector("#count").textContent), 0), Number(mainElement.querySelector(".price").textContent.match(/\d+/g).join(""))/100]

            var newshopper = {}

            mainElement.querySelector("#prostonado").textContent = String(shopper[mainElement.querySelector(".item-name").textContent][0] * shopper[mainElement.querySelector(".item-name").textContent][1]) + ".00₽"
            
            var total = 0

            Object.keys(shopper).forEach(item => {
                total += shopper[item][0] * shopper[item][1]
            });
            
            document.querySelector("#total-a").textContent = String(total) + ".00₽"

            Object.keys(shopper).forEach(item => {
                if (shopper[item][0] != 0) {
                    newshopper[item] = shopper[item]
                } else if (item == mainElement.querySelector(".item-name").textContent) {
                    var parent = document.querySelector(".shopper-items")
                    parent.removeChild(mainElement)
                }
            });

            if (Object.keys(newshopper).length == 0) {
                window.localStorage.clear()
            } else {
                window.localStorage.setItem("shopper", JSON.stringify(newshopper))
            }

            return 0
    }
}

function copyToClip(clickedElement) {
    navigator.clipboard.writeText("/buy " + window.localStorage.getItem("shopper"))
}

function clearShopper(clickedElement) {
    window.localStorage.clear()
    location.reload()
}