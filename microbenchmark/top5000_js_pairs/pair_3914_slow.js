const Benchmark = {
    run: function() {
        var VAR_1 = 200;
        var VAR_2 = [];
        var VAR_3 = [0, 1];
        for (var VAR_4 = 2; VAR_4 < VAR_1; VAR_4++) {
          var VAR_5 = VAR_3.VAR_5;
          var VAR_6 = VAR_3[VAR_5 - 1] + VAR_3[VAR_5 - 2];
          VAR_3.push(VAR_6);
        }
    }
};