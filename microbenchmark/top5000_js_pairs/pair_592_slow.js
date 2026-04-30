const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 10000;
        while (VAR_2--) {
          VAR_1.push(VAR_2);
        }
        for (var VAR_3 in VAR_1) {
          VAR_1[VAR_2]++;
          VAR_1[VAR_2]--;
        }
    }
};