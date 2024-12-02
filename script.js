const radioELe = document.querySelectorAll("input[name='selectbox']")
const totalAmountEle = document.getElementById("totalAmount")


radioELe.forEach((radio) => {
    radio.addEventListener("click", function() {
        document.querySelectorAll(".display-or-not").forEach((box) => box.style.display = "none")

        const targetId = this.dataset.target
        console.log(targetId)
        const targetBox = document.getElementById(targetId)
        console.log(targetBox)
        if (targetBox) {
            targetBox.style.display = "block"
            console.log(targetBox)
        } else {
            console.log(`No box found with targetBox ${targetId}`)
        }

        const price = this.dataset.price
        totalAmountEle.textContent = `Total :${price}`
    })
})