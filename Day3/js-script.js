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
    //oxygen rating
    let newArr = arr.split("\n");
    let zeroCount = 0, oneCount = 0;
    for (let x = 0; x < newArr[0].length; x++) {
        oxygen(x);
    }

    function oxygen(number) {
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i].charAt(number) == 0) {
                zeroCount += 1;
            } else {
                oneCount += 1;
            }
        }
        
        oxygen2();
        function oxygen2() {
           for (let i = 0; i < newArr.length; i++) {
                if (zeroCount < oneCount) {
                    if (newArr[i].charAt(number) == 0) {
                        newArr.splice(i, 1);
                        oxygen2();
                    }
                } else if (oneCount < zeroCount) {
                    if (newArr[i].charAt(number) == 1) {
                        newArr.splice(i, 1);
                        oxygen2();
                    }
                } else if (oneCount == zeroCount) {
                    if (newArr[i].charAt(number) == 0) {
                        newArr.splice(i, 1);
                        oxygen2();
                    }
                }
            } 
        }
        zeroCount = 0, oneCount = 0;
    }
    const ORB = newArr[0];
    const oxygenRating = ORB.charAt(ORB.length - 1) * 1**1 + ORB.charAt(ORB.length - 2) * 2**1 + ORB.charAt(ORB.length - 3) * 2**2 + ORB.charAt(ORB.length - 4) * 2**3 + ORB.charAt(ORB.length - 5) * 2**4 + ORB.charAt(ORB.length - 6) * 2**5;  
    console.log(oxygenRating);
}

banana(arr);


