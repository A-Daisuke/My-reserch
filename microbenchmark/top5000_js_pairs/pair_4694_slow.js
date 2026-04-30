const Benchmark = {
    run: function() {
        var VAR_1 = 200;
        var VAR_2 = [];
        var VAR_3 = [0, 1];
        for (var VAR_4 = 0; VAR_4 < VAR_1; VAR_4++) {
          VAR_3.push(VAR_3[0] + VAR_3[1]);
          VAR_2.push(VAR_3[0]);
          VAR_3.shift();
        }
    }
};