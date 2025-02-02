/*
    클래스 정의 : class 키워드를 사용하여 선언
    - constructor를 이용하여 멤버 변수를 선언 및 초기화할 수 있음
    - 생성자에서 this를 이용해서 멤버 변수를 지정할 수 있음
    - new 연산자로 인스턴스를 생성할 수 있음
*/
// 왕 클래스 : 이름 / 묘명 / 생일 / 사망일
// class King {
//     constructor () {
//         this.name = '이성계';
//         this.tombName = '태조';
//         this.birth = '1335-11-04';
//         this.death = '1408-06-27';
//     }
// }
// const teajo = new King();
// console.log(teajo);


console.log('==================================================');

/*
    constructor: 
    - 인스턴스를 생성하고 클래스의 필드를 초기화 하는 용도로 사용되는 특수한 메서드
    - 생성자 안에 this 키워드를 사용하여 클래스의 맴버 변수를 선언하고 초기화할 수 있음
    - 생성자의 매개변수로 각 속성의 값을 받아와서 초기화
    - 자바스크립트의 생성자는 오버로딩이 안됨
*/
class King {
    // constructor () {}
    constructor (name, tombName, birth, death) {
        this.name = name;
        this.tombName = tombName;
        this.birth = birth;
        this.death = death;
    }
}
const jungjong = new King('이방과', '정종', '1357-07-26', '1419-10-15');
console.log(jungjong);


console.log('==================================================');

/*
    클래스의 필드 선언 : ES6+의 클래스가 가질 수 있는 제어자
    - 퍼블릭 필드
    - 프라이빗 필드
    - 정적(스태틱) 퍼블릭 필드
    - 정적(스태틱) 프라이빗 필드
*/ 
class Sample1 {
    // 퍼블릭 필드
    publicField;
    // 프라이빗 필드
    #privateField;
    // 정적 퍼블릭 필드
    static staticPublicField = '정적 퍼플릭 필드';
    // 정적 프라이빗 필드
    static #staticPrivateField = '정적 프라이빗 필드';

    constructor (publicField, privateField) {
        this.publicField = publicField;
        this.#privateField = privateField;
        // 정적 변수는 this. 으로 접근 불가능
        // 아래에 지정한 this.staticPublicField는 인스턴스 변수
        this.staticPublicField = publicField;
    }
}
const sample1Instance = new Sample1('퍼블릭', '프라이빗');

console.log(sample1Instance);
// console.log(sample1Instance.#privateField);     //#privateField 속성은 프라이빗 식별자를 포함하기 떄문에 Sample1 클래스 외부에서 엑세스 불가능
console.log(Sample1.staticPublicField);


console.log('==================================================');

/*
    getter, setter : 
    - getter : 프라이빗 멤버 변수의 값을 얻을 수있는 캡슐화 메서드
    - setter : 프라이빗 멤버 변수의 값을 할당할 수 있는 캡슐화 메서드
*/
class Sample2 {
    #privateField;

    constructor (privateField) {
        this.#privateField = privateField;
    }

    get PrivateField () {
        return this.#privateField;
    }

    set PrivateField (privateField) {
        this.#privateField = privateField;
    }
}

const sample2Instance = new Sample2('프라이빗');
console.log(sample2Instance);
console.log(sample2Instance.PrivateField);
sample2Instance.PrivateField = '변경 프라이빗';
console.log(sample2Instance.PrivateField);


console.log('==================================================');

/*
    인스턴스 메서드와 정적 메서드 : 
    - 클래스 내부에서 function 키워드 없이 함수를 작성하여 인스턴스 메서드 선언
    - static 키워드를 추가하여 정적 메서드 선언
*/
class Sample3 {
    instanceMethod () {
        console.log('인스턴스 메서드');
    }

    static staticMethod () {
        console.log('정적 메서드');
    }
}

const sample3instance = new Sample3();
sample3instance.instanceMethod();
// sample3instance.staticMethod();      // 정적 메서드는 인스턴스에서 호출할 수 없고, 클래스 이름을 통해 호출 해야함
Sample3.staticMethod();


console.log('==================================================');

/*
    클래스 상속 : 
    - extends 키워드를 사용하여 클래스 상속
    - 메서드 오버라이딩 가능
    - super 키워드로 부모 클래스 참조 가능
*/
class ParentsClass {
    parentsField;

    constructor(parentsField) {
        this.parentsField = parentsField;
    }

    parentsMethod() {
        console.log('부모 메서드');
    }
}

class ChildClass extends ParentsClass {
    childField;

    constructor(parentsField, childField) {
        super(parentsField); // 부모 클래스의 생성자 호출
        this.childField = childField;
    }

    childMethod() {
        console.log('자식 메서드');
    }

    parentsMethod() {
        console.log('오버라이드 메서드'); // 부모 메서드 오버라이드
    }
}

const parentsInstance = new ParentsClass('부모 필드');
const childInstance = new ChildClass('부모 필드', '자식 필드');

console.log(childInstance);
childInstance.childMethod(); // 자식 메서드
childInstance.parentsMethod(); // 오버라이드 메서드