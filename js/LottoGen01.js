
//1. 45개 번호 생성

let lottnos = []
let drawnos = []
for (let i = 0; i < 45 ; i++) {
    lottnos[i] = i +1
}

console.log(lottnos)

//2. 숫자를 랜덤하게 추첨하여 추첨된 인덱스 번호를 splice를 이용해서 삭제
//3. 삭제된 배열에서 새로운 번호 추첨
//4. 번호 6개 추첨하여 배열 전달

for ( i = 0; i < 6; i++) {
    let index = parseInt(Math.random() * lottnos.length)

    const num = lottnos[index]
    console.log(num)

    if(drawnos.indexOf(num) >= 0){
        console.log("중복 발생")
        i--
        continue
    }

    drawnos.push(num)
}

console.log(drawnos)

