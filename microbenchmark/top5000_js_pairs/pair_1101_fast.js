const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        var VAR_2 = [];
        while (--VAR_1) {
          VAR_2.push({});
        }
    }
};