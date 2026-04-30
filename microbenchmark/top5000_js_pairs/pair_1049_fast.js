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
        var VAR_6 = VAR_1.VAR_6;
        for (VAR_2 = 0; VAR_2 < VAR_6; VAR_2++) {
          VAR_1[VAR_8] = VAR_1[VAR_2] * 2.3;
        }
        VAR_6 = VAR_3.VAR_6;
        for (VAR_2 = 0; VAR_2 < VAR_6; VAR_2++) {
          VAR_3[VAR_7] = VAR_3[VAR_2] * 2.3;
        }
    }
};