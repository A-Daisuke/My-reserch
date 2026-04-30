const Benchmark = {
    run: function() {
        var VAR_1 = 5000;
        var VAR_2 = [];
        while (VAR_1--) {
          VAR_2.push(0);
        }
    }
};