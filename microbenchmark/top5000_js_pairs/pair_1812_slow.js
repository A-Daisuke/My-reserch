const Benchmark = {
    run: function() {
        var VAR_1 = "Math.sin(x)";
        var VAR_2 = Function("x", "return " + VAR_1);
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          var VAR_4 = VAR_2(VAR_3);
        }
    }
};