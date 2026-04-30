const Benchmark = {
    run: function() {
        var VAR_1 = "";
        var VAR_2 = "";
        var VAR_3 = [""];
        for (var VAR_4 = 0; VAR_4 < 100000; VAR_4++) {
          VAR_3.push(VAR_4);
        }
        VAR_1 = VAR_3.join("");
    }
};