const Benchmark = {
    run: function() {
        var VAR_1 = 200,
          VAR_2 = [];
        while (VAR_1--) VAR_2.push("a" + VAR_1);
    }
};