const Benchmark = {
    run: function() {
        var VAR_1 = 1000;
        var VAR_2 = [];
        do {
          VAR_2 = [--VAR_1].concat(VAR_2);
        } while (VAR_1);
    }
};