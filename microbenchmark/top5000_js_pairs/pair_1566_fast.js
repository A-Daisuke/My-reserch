const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 500; VAR_2++) {
          VAR_1.push(Math.floor(Math.random() * 100));
        }
        var VAR_3 = 0;
        var VAR_5 = new Function("return (function(a, b) { return a + b; });")();
        for (var VAR_4 = 0; VAR_4 < 999; VAR_4++) {
          VAR_3 += VAR_5(VAR_3[VAR_4], VAR_3[VAR_4 + 1]);
        }
    }
};