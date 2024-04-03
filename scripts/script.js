var shopper = {}
function first(clickedElement) {
    var id = clickedElement.getAttribute("id") 
    var mainElement = clickedElement.parentElement.parentElement.parentElement

    if (mainElement.getAttribute('id') == null) {
        mainElement = mainElement.parentElement
    }

    var num = Number(mainElement.querySelector("#count").textContent)

    switch (id) {
        case ("plus"):
            mainElement.querySelector("#count").textContent = Math.min(++num, 20)
            break
        case ("minus"):
            if (num > 1) {
                mainElement.querySelector("#count").textContent = --num
            }
            break
        case ("add"):
            var localnum = 0
            try {
                localnum = shopper[mainElement.getAttribute('id')][0]
            } catch {
                NaN
            }
            
            shopper[mainElement.querySelector("#en_name").textContent] = [Math.min(num + localnum, 20), Number(mainElement.querySelector("#price").textContent.match(/\d+/g).join(""))/100]
            console.log(shopper)
            break
    }
}