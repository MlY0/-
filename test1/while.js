const 용돈받기 = function (얼마) {
  // 근데 저거 이름 나이 저런것들은 그냥 내맘대로 하는거야? 어차피 asdf안에 들어가는거니까?
  this.용돈 += 얼마
}

const MALE = 1
const FEMALE = 0

const 용돈 = 10000

let asdf = {
  name: '박점례',
  age: 82,
  sex: FEMALE,
}
//key : value
let 두팔 = {
  name: '두팔',
  용돈, // 이러면 이거도 줄일수있는거?? 이해햇다
  용돈받기, // 그냥 편의성
  퍽: function (asdf) {
    // 네 이해햇음
    console.log(asdf.name + '을/를 때렸다. 으악')
  },
}

let 나 = {
  name: '돈만은개발자', //??
  용돈: 1000,
  용돈받기,
}

while (나.용돈 >= 50) {
  두팔.퍽(나)
  두팔.용돈받기(50)
  나.용돈받기(-50)
}
