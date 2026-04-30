const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2;
        for (VAR_2 = 0; VAR_2 < 1000000; VAR_2++) {
          VAR_1.push(Math.floor(Math.random() * 10));
        }
        var VAR_6 = 0;
        for (var VAR_8 = 0; VAR_8 < VAR_1.length; VAR_8++) {
          VAR_6 += VAR_1[VAR_8];
        }
    }
};