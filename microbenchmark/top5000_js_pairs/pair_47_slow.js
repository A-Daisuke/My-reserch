const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 400000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var VAR_3 = 0;
        for (var VAR_4 in VAR_1) {
          var VAR_5 = VAR_1[VAR_4];
          VAR_3 += VAR_5;
        }
    }
};