const Benchmark = {
    run: function() {
        var VAR_1 = Array.apply(null, new Array(100000));
        for (var VAR_2 in VAR_1) {
          VAR_2;
        }
    }
};