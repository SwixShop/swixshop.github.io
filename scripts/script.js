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
            return 0
        case ("minus"):
            if (num > 1) {
                mainElement.querySelector("#count").textContent = --num
            }
            return 0
        case ("add"):
            var localnum = 0
            try {
                localnum = shopper[mainElement.querySelector("#en_name").textContent][0]
            } catch {
                NaN
            }
            
            shopper[mainElement.querySelector("#en_name").textContent] = [Math.min(num + localnum, 20), Number(mainElement.querySelector("#price").textContent.match(/\d+/g).join(""))/100]
            console.log(shopper)
            return 0
    }
}

var btn = document.querySelector("#set_unique");
btn.addEventListener("click", (event) => {
    if (event.srcElement.checked === false) {
        document.querySelectorAll("#" + event.srcElement.name).forEach((item) => {
            item.classList.add("hide")
        })
    } else {
        document.querySelectorAll("#" + event.srcElement.name).forEach((item) => {
            item.classList.remove("hide")
        })
    }
})

var btn = document.querySelector("#set_ancient");
btn.addEventListener("click", (event) => {
    if (event.srcElement.checked === false) {
        document.querySelectorAll("#" + event.srcElement.name).forEach((item) => {
            item.classList.add("hide")
        })
    } else {
        document.querySelectorAll("#" + event.srcElement.name).forEach((item) => {
            item.classList.remove("hide")
        })
    }
})

var btn = document.querySelector("#set_godly");
btn.addEventListener("click", (event) => {
    if (event.srcElement.checked === false) {
        document.querySelectorAll("#" + event.srcElement.name).forEach((item) => {
            item.classList.add("hide")
        })
    } else {
        document.querySelectorAll("#" + event.srcElement.name).forEach((item) => {
            item.classList.remove("hide")
        })
    }
})

var btn = document.querySelector("#set_legendary");
btn.addEventListener("click", (event) => {
    if (event.srcElement.checked === false) {
        document.querySelectorAll("#" + event.srcElement.name).forEach((item) => {
            item.classList.add("hide")
        })
    } else {
        document.querySelectorAll("#" + event.srcElement.name).forEach((item) => {
            item.classList.remove("hide")
        })
    }
})

var btn = document.querySelector("#set_vintage");
btn.addEventListener("click", (event) => {
    if (event.srcElement.checked === false) {
        document.querySelectorAll("#" + event.srcElement.name).forEach((item) => {
            item.classList.add("hide")
        })
    } else {
        document.querySelectorAll("#" + event.srcElement.name).forEach((item) => {
            item.classList.remove("hide")
        })
    }
})

var btn = document.querySelector("#set_another");
btn.addEventListener("click", (event) => {
    if (event.srcElement.checked === false) {
        document.querySelectorAll("#" + event.srcElement.name).forEach((item) => {
            item.classList.add("hide")
        })
    } else {
        document.querySelectorAll("#" + event.srcElement.name).forEach((item) => {
            item.classList.remove("hide")
        })
    }
})

document.querySelector("#set_item").oninput = function () {
    let value = this.value.trim().toLowerCase()
    let items = document.querySelectorAll(".product")
    if (value != '') {
        items.forEach(function (element) {
            if (element.innerText.toLowerCase().search(value) == -1) {
                element.classList.add("searchhide")
            } else {
                element.classList.remove("searchhide")
            }
        })
    } else {
        items.forEach(function (element) {
            element.classList.remove("searchhide")
        })
    }
}