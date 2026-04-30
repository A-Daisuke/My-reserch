const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000000);
        var VAR_2 = [];
        for (var VAR_4 in VAR_1) {
          VAR_2.push(VAR_1[VAR_4]);
        }
    }
};