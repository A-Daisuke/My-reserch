const Benchmark = {
    run: function() {
        var VAR_1 = "hello ";
        var VAR_2 = "world";
        var VAR_3 = new Array(10001);
        VAR_3[0] = VAR_1;
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          VAR_3[VAR_4 + 1] = VAR_2;
        }
        VAR_1 = VAR_3.join("");
    }
};