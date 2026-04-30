const Benchmark = {
    run: function() {
        var VAR_1 = "0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,";
        for (var VAR_2 = 1; VAR_2 < 10; VAR_2++) {
          VAR_1 += VAR_1;
        }
        var VAR_3 = /(\d)/g,
          VAR_4;
        while ((VAR_4 = VAR_3.exec(VAR_1))) {}
    }
};