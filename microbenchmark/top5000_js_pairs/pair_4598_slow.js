const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return 1 / (1 + Math.exp(-VAR_1));
        }
        eval("function bar(x) { return 1/(1+Math.exp(-x)); }");
        VAR_2 = new Function("x", "return 1/(1+Math.exp(-x));");
        for (var VAR_3 = 0; VAR_3 < 100; VAR_3++) {
          bar(VAR_3);
        }
    }
};