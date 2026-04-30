const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3, 4];
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_2.push(VAR_3);
        }
        var VAR_6 = VAR_2.length;
        for (var VAR_7 = 0; VAR_3 < VAR_6; VAR_3++) {
          var VAR_5 = VAR_2[VAR_3];
        }
    }
};