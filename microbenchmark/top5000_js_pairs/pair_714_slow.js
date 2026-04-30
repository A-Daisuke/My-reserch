const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        var VAR_2 = 3;
        var VAR_3 = Array.from(Array(VAR_1)).map(function (VAR_4) {
          return Math.random();
        });
        var VAR_5;
        var VAR_6;
        var VAR_7;
        for (var VAR_8 = 0; VAR_8 < VAR_2; VAR_8++) {
          VAR_5 = JSON.stringify(VAR_3);
          VAR_6 = JSON.parse(VAR_5);
          VAR_7 += VAR_6.length;
        }
    }
};