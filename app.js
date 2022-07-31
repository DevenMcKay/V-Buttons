const h1 = document.createElement("h1")
h1.textContent = "Welcome, Please Click A Button"
document.body.append(h1)

const buttons = Array(12)

buttons.fill("Button", 0, 12)

buttons.forEach((button, index) => {
  const newButtons = document.createElement("button")
  const buttonName = `${button} ${index + 1}`
  newButtons.textContent = buttonName
  newButtons.setAttribute("id", buttonName)
  newButtons.addEventListener("click", () => { alert(buttonName) })
  document.body.append(newButtons)
})

