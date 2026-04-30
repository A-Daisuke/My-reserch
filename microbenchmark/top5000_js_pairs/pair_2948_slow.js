const Benchmark = {
    run: function() {
        var VAR_1 = 200,
          VAR_2 = [];
        while (VAR_1--) VAR_2 = VAR_2.concat(["a" + VAR_1]);
    }
};