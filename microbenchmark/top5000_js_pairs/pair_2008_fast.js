const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10001).join("a").split("");
        var VAR_2 = "";
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_2 += "a";
        }
    }
};