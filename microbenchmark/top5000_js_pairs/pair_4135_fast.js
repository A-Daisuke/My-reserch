const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_3) {
          return 1 / (1 + Math.exp(-VAR_3));
        }
        eval("function bar(x) { return 1/(1+Math.exp(-x)); }");
        VAR_1 = new Function("x", "return 1/(1+Math.exp(-x));");
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          FUNCTION_1(VAR_2);
        }
    }
};