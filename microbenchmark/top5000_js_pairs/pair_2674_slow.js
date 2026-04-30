const Benchmark = {
    run: function() {
        var VAR_1 = [];
        while (VAR_1.length < 1000) {
          VAR_1.push(VAR_1[VAR_1.length - 1] + Math.random());
        }
        for (var VAR_2 in VAR_1) {
          parseInt(VAR_1[VAR_2]);
        }
    }
};