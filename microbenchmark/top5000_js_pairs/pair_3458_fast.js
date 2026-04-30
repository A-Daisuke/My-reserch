const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 0,
          VAR_3 = 1000;
        while (VAR_2 < VAR_3) {
          VAR_1.push(VAR_2++);
        }
        var VAR_4 = null,
          VAR_5 = null;
        var VAR_7, VAR_8;
        for (VAR_7 = 0, VAR_8 = VAR_1.length; VAR_7 < VAR_8; VAR_7++) {
          VAR_4 = VAR_1[VAR_7];
        }
    }
};