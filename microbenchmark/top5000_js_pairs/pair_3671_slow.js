const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2;
        var VAR_3;
        for (VAR_3 = 1000; VAR_3 >= 0; --VAR_3) {
          VAR_1.push("a");
        }
        VAR_2 = VAR_1.join("");
    }
};