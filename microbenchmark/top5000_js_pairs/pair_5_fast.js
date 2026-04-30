const Benchmark = {
    run: function() {
        var VAR_1 = "hello ";
        var VAR_2 = "world";
        var VAR_4 = new Array(10001);
        VAR_4[0] = VAR_1;
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_4[VAR_3 + 1] = VAR_2;
        }
        VAR_1 = VAR_4.join("");
    }
};