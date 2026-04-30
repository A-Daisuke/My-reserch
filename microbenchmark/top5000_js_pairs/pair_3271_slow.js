const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 5000;
        var VAR_3 = 0;
        while (VAR_3 < VAR_2) {
          VAR_1.push(VAR_3);
          VAR_3++;
        }
        var VAR_4 = 0,
          VAR_5 = VAR_1.length,
          VAR_6 = [];
        while (VAR_4 < VAR_5) {
          VAR_6.push(VAR_1[VAR_4]);
          VAR_4++;
        }
    }
};