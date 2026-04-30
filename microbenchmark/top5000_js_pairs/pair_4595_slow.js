const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          var VAR_3 = VAR_2 + 0.14125;
          VAR_1.push(VAR_3.toString());
        }
        var VAR_4 = [];
        for (var VAR_5 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          VAR_4.push(1 * VAR_1[VAR_2]);
        }
    }
};