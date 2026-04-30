const Benchmark = {
    run: function() {
        var VAR_1 = "apple";
        while (VAR_1.length < 10000) {
          var VAR_5 = VAR_1.substr(-5);
          VAR_1 += VAR_5 + VAR_5;
        }
    }
};