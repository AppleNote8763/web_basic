/*
    디스트럭처링 :
    - 구조화된 배열 혹은 객체를 비구조화, 구조화를 파괴해서 개별 변수로 할당하는 것
    - 배열 혹은 객체에서 필요한 데이터만 추출해서 변수로 사용할 수 있도록 함
*/
let fruits = ['apple', 'banana', 'cacao'];
// const fruit1 = fruits[0];
// const fruit2 = fruits[1];
// const fruit3 = fruits[2];

let king = {
    name: '이성계',
    tomb: '태조',
    birth: '1335-11-04'
}
// const name = king.name;
// const tomb = king.tomb;
// const birth = king.birth;


/*
    배열 디스트럭처링
    - 배열의 각각의 요소를 배열로부터 추출해서 변수에 할당
    - 할당 기준은 인덱스
*/
// fruits = ['apple', 'banana', 'cacao'];
// 만약에 배열 디스트럭처링에 배열의 길리를 초과한 변수를 선언하면 초과한 범위에 해당하는 변수는 undefined가 지정됨

// const [fruit1, fruit2,] = fruits;
// console.log(fruit1, fruit2);

// const [fruit1, fruit2, fruit3] = fruits;
// console.log(fruit1, fruit2, fruit3);

const [fruit1, fruit2, fruit3, fruit4] = fruits;
console.log(fruit1, fruit2, fruit3, fruit4);


console.log('========================================');

/*
    spread 연산자를 활용
    - 배열 디스트럭처링 마지막에 스프레드 연산자를 사용하면 남은 모든 요소로 새로운 배열을 생성
*/
const [anotherFruit, ...othersFruits] = fruits;
console.log(anotherFruit, othersFruits);

// const [...othersFruits2, anotherFruit2] = fruits;   // rest 요소는 배열 구조 파괴 패턴의 마지막 요소여야 한다.


console.log('========================================');

/*
    객체 디스트럭처링
    - 객체의 각 속성을 객체로부터 추출하여 변수에 할당
    - 할당 기준은 키
*/
// king = {
//     name: '이성계',
//     tomb: '태조',
//     birth: '1335-11-04'
// }

// 객체 디스트럭처링에서는 변수의 순서는 상관없지만, 이름은 반드시 객체 키의 이름과 같아야함
const {name1, tomb1, birth1} = king;    // 객체는 중괄호로 표현
console.log(name1, tomb1, birth1);

// 키 이름과 다르게 사용하고 싶은땐 '키:변수명'을 사용
const {name: fullName, tomb2, birth: birthday} = king;
console.log(fullName, tomb2, birthday);


console.log('========================================');

/*
    spread 연산자를 활용
    - 객체 디스트럭처링 마지막에 스프레드 연산자를 사용하면 나머지 모든 속성을 묶어서 새로운 객체를 생성
*/
const {birth, ...reftKing} = king
console.log(birth);
console.log(reftKing);


console.log('========================================');