const Benchmark = {
    run: function() {
        eval("function bar(x) { return 1/(1+Math.exp(-x)); }");
        VAR_1 = new Function("x", "return 1/(1+Math.exp(-x));");
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          bar(VAR_2);
        }
    }
};