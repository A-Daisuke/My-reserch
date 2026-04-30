const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_3 = 1000000;
        while (VAR_3--) {
          VAR_1.push(Math.random());
        }
    }
};