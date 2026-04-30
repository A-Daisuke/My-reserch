const Benchmark = {
    run: function() {
        var VAR_1 = "21312312312*324432432";
        var VAR_2 = 1000;
        while (--VAR_2) {
          VAR_1.indexOf("*");
        }
    }
};