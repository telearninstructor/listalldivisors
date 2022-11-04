let num = 0
let div = 0
let out = ""
forever(function () {
    game.splash("請輸入需要找因數的數字")
    num = Math.trunc(game.askForNumber("請輸入需要找因數的數字"))
    div = 2
    out = "1"
    while (div <= num) {
        if (num % div == 0) {
            out = "" + out + "," + convertToText(div)
            div += 1
        } else {
            div += 1
        }
    }
    game.splash(out)
})
