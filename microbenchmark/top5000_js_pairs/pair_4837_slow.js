const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_1.push(VAR_3);
          VAR_2.push(VAR_3.toString());
        }
        var VAR_4 = {};
        for (var VAR_5 = 0; VAR_3 < VAR_2.length; VAR_3++) {
          VAR_4[VAR_2[VAR_6]] = true;
        }
        for (var VAR_7 = 0; VAR_3 < VAR_2.length; VAR_3++) {
          VAR_4[VAR_2[VAR_8]] = false;
        }
    }
};