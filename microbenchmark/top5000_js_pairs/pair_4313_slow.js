const Benchmark = {
    run: function() {
        var VAR_1 = new Number(42);
        try {
          VAR_1.toExponential(21);
        } catch (VAR_2) {}
        try {
          VAR_1.toFixed(21);
        } catch (VAR_3) {}
        try {
          VAR_1.toPrecision(22);
        } catch (VAR_4) {}
        try {
          VAR_1.toString(37);
        } catch (VAR_5) {}
    }
};