// console.log("lotto...................")
//
// const btn = document.getElementById("btn") //발생 주체
//
// console.log(btn)
//
// //function doA() {}
// // btn.addEventListener("click", doA이 방법은 윈도우로 들어가므로 추천하지 않음.
//
// //함수자체 선언하는 방법
// //btn.addEventListener("click",function(){})

// 화살표 함수 사용
// btn.addEventListener("click",(event) => {
//     console.log(event)
//
//     const target = document.getElementById("resultDiv")      //target 에 "h3"을 넣는다.
//
//     const balls = makeLottoNum()        //배열 즉, 루프를 돌릴수있다
//
//     //clear all <h3> tags
//     target.innerHTML =''                //기존에 있었던 것은 모두 삭제 // 한꺼번에 DOM 작업을 한번만 하도록 만들어 주기.
//
//     let str =''
//
//     for (const num of balls) {
//
//         str += `<h3>${num}</h3>`
//
//         target.innerHTML = str
//         // const tag = document.createElement("h3")
//         // const textNode = document.createTextNode(num)
//         // tag.appendChild(textNode)
//         // target.appendChild(tag)
//     }
//
//
// }, false)    // 무조건 뒤에 false 작성.

// (상단) 작성되어있는 부분은 이벤트발생의 표준이다.

//(하단) 함수를 통한 로또 발생
function makeLottoNum(){

    const arr = []

    for (let i = 0; i < 6; i++) {
        const tempNum = parseInt(Math.random() * 45) + 1
        //arr 안에 tempNum 이 있다면
        if( arr.indexOf(tempNum) >= 0 ){
            console.log("중복")
            i--
            continue
        }
        arr.push(tempNum)
    }

    // arr.sort(function(a,b) {
    //     return a -b
    // })

    arr.sort((a,b) => a - b )

    return arr

}

console.log(makeLottoNum())