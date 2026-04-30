const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 0;
        for (VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var VAR_3 = [];
        for (VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_3.push(VAR_2);
        }
        var VAR_4 = VAR_1.concat(VAR_3);
        var VAR_5 = 0;
        var VAR_6 = VAR_4.VAR_6;
        for (VAR_2 = 0; VAR_2 < VAR_6; VAR_2++) {
          VAR_4[VAR_7] = VAR_4[VAR_2] * 2.3;
        }
    }
};