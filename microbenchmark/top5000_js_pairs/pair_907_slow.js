const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var VAR_3, VAR_4;
        var VAR_5 = [];
        for (VAR_3 = 0, VAR_4 = VAR_1.length; VAR_3 < VAR_4; VAR_3++) {
          VAR_6 = VAR_1[VAR_3];
          VAR_5.push(VAR_6);
        }
    }
};