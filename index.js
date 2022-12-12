export default function printPrimes(num1, num2) {
    var a=num1, b=num2, arr=[];
    for (let i = a; i <= b; i++) {
        if (i == 1 || i == 0)
            continue;
        var flag = 1;
        for (let j = 2; j <= i / 2; ++j) {
            if (i % j == 0) {
                flag = 0;
                break;
            }
        }
        if (flag == 1)
            arr.push(i);
    }
    return arr;
}