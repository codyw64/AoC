let arr = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

function banana(arr) {
    let newArr = arr.split("\n");
    //oxygen
    oxygen();
    function oxygen() {
        let count0 = 0, count1 = 0;        
        for (let i = 0; i < newArr.length; i++) {
            for (let j = 0; j < 2; j++) {
                if (newArr[i].charAt(j) == 0) {
                    count0++;
                } else if (newArr[i].charAt(j) == 1) {
                    count1++;
                }
            }
    }
    oxygen1();
    function oxygen1() {
        if (count0 > count1 || count0 == count1) {
        for (let i = 0; i < newArr.length; i++) {
            for (let j = 0; j < 1; j++) {
                if (newArr[i].charAt(j) == 1) {
                    newArr.splice(i, 1);
                    oxygen1();
                }
            }
    }
    } else if (count0 < count1) {
        for (let i = 0; i < newArr.length; i++) {
            for (let j = 0; j < 1; j++) {
                if (newArr[i].charAt(j) == 0) {
                    newArr.splice(i, 1);
                    oxygen1();
                }
            }
    }
    }
    
    }
    console.log(newArr);
    }



    //co2


}


banana(arr);