/* 
1. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
ex)
0
2
4
6
8

2. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 작은 수부터 문자열로 출력하시오.
ex) 02468
for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
ex)
9
7
5
3
1


3. while문을 사용하여 0부터 10까지 정수 중에서 짝수만을 작은 수부터 출력하시오.
ex)
0
2
4
6
8


4. while문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
ex)
9
7
5
3
1




5. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오
ex) 45




6. 1부터 20까지의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
1, 5, 7, 11, 13, 17, 19 => 79


7. 1부터 20까지의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
2, 3, 4, 6, 8, 9, 10, 12, 14, 15, 16,18, 20 => 137


8. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하는 코드를 작성하시오.
[ 1, 5 ]
[ 2, 4 ]
[ 3, 3 ]
[ 4, 2 ]
[ 5, 1 ]

9. 삼각형출력하기

다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라.
개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관게없다.

// 높이(line)가 5
*
**
***
****
*****

10. 트리 출력하기

다음을 참고하여 *(별)로 트리를 문자열로 완성하라.
개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관게없다.

// 높이(line)가 3일때 + 높이(line)가 5일때
*
**
***
*
**
***
****
***** (edited)


*/


function problem1() {
    for(let i = 0; i < 10; i++) {
        if(i%2 == 0) console.log(i)
    }
}
function problem2() {
    let result = '';
    for(let i = 0; i < 10; i++) {
        if( i%2 === 0 ) result += i+'';
    }
    console.log(result);
    for(let i = 10; i > 0; i--) {
    if(i % 2 === 1) console.log(i)
    }
}
function problem3() {
    let i = 0;
    while(i < 10){
        if(i % 2 === 0) console.log(i);
        i++;
    }
}
function problem4() {
    let i = 10;
    while(i > 0) {
        if(i % 2 === 1) console.log(i);
        i--;
    }
}
function problem5() {
    let sum = 0;
    for(let i = 0; i < 10; i++) {
        sum += i;
    }
    console.log(sum);
}
function problem6() {
    let sum = 0;
    for(let i = 1; i <= 20; i++) {
        if(!(i%2===0) && !(i%3===0) ) {
            sum += i;
        }
    }
    console.log(sum);
}
function problem7() {
    let sum = 0;
    for(let i = 1; i <= 20; i++) {
        if( (i%2===0) || (i%3===0) ){
            sum += i;
        }
    }
    console.log(sum);
}
function problem8() {
    for(let i = 1; i <= 6; i++) {
        for(let j = 1; j <= 6; j++) {
            if ((i + j) === 6) console.log('['+ i + ']  ' + '['+ j + ']');
        }
    }
}
function problem9(line) {
    let result = '';
    let star = ''
    //방법1
    // for(let i = 0; i < line; i++) {
    //     for(let j = 0; j <= i; j++) {
    //         result += '*';
    //     }
    //     result += '\n';
    // }
    
    //방법2
    // for(let i = 0; i < line; i++) {
    //     result += Array(i+2).join('*') + '\n';
    // }
    
    //방법13
    for(let i = 0; i < line; i++) {
        star += '*';
        result += star + '\n';
    }
    console.log(result);
}
function problem10(line1, line2) {
    problem9(line1);
    problem9(line2);
}

console.log('======== problem1 ========')
problem1();
console.log('======== problem2 ========')
problem2();
console.log('======== problem3 ========')
problem3();
console.log('======== problem4 ========')
problem4();
console.log('======== problem5 ========')
problem5();
console.log('======== problem6 ========')
problem6();
console.log('======== problem7 ========')
problem7();
console.log('======== problem8 ========')
problem8();
console.log('======== problem9 ========')
problem9(5);
console.log('======== problem10 ========')
problem10(3, 5);