let 불의밝기2 = 10000000000000

if (불의밝기2 >= 100000) {
    console.log("선샌니가 불에타고잇다")
}
else if (불의밝기2 >= 70) {
    console.log("야호 선샌니가 일어낫다")
}
else {
    console.log("선샌니가 일어나지안아..")
}


switch (true) {
    case 불의밝기2 >= 100000:
        console.log("선샌니가 불에타고잇다")

    case 불의밝기2 >= 70:
        console.log("야호 선샌니가 일어낫다")
        break
    default:
        console.log("선샌니가 일어나지안아..")
        break

}



let 불의밝기 = 불을켜다()

function 불을켜다(전구의수) {
    if (전구의수 >= 93728593834) {
        let 답변1 = "선샌니는 태양이되어 핵융합을일으키고잇는것같아 보이다"
        return 답변1
    } else if (전구의수 >= 4) {
        let 답변2 = "선샌니는 눈이부신듯하다"
        return 답변2
    } else {
        let 답변3 = "선샌니가일어나지안아.."
        return 답변3
    }
}

function 불을켜다(전구의수) {
    let 답변

    if (전구의수 >= 93728593834) {
        답변 = "선샌니는 태양이되어 핵융합을일으키고잇는것같아 보이다"
    } else if (전구의수 >= 4) {
        답변 = "선샌니는 눈이부신듯하다"
    } else {
        답변 = "선샌니가일어나지안아.."
    }

    return 답변
}






let 내가뒤져서돈많으면맞는다 = 돈을뒤져본다(50.1)

function 돈을뒤져본다(money) {
    if (money > 49.9) {
        let 값 = "넌좀맞자"
        return 값
    } else {
        let 값2 = "얼마업내봐줄게"
        return 값2
    }
}

function 돈을뒤져본다2(money) {
    let 값

    if (money > 49.9) {
        값 = "넌좀맞자"
    } else {
        값 = "얼마업내봐줄게"
    }

    return 값
}


function 돈을뒤져본다3(money) {
    if (money > 49.9) {
        return "넌좀맞자"
    } else {
        return "얼마업내봐줄게"
    }
}


// console.log(돈을뒤져본다(50))
// console.log(돈을뒤져본다(40))

let 너의운명은 = 돈을뒤져본다(50)


console.log(너의운명은)