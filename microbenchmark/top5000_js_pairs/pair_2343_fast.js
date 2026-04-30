const Benchmark = {
    run: function() {
        var VAR_1 = 10000,
          VAR_2 = [],
          VAR_3;
        while ((VAR_1 = VAR_1 - 1)) {
          VAR_2.push(VAR_1.toString());
        }
        VAR_3 = String.prototype.concat.apply("", VAR_2);
    }
};