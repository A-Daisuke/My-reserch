const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = "";
        for (var VAR_3 = 0; VAR_3 < 3000; VAR_3++) {
          VAR_1.push("hello" + VAR_3);
        }
        VAR_1.join("");
    }
};