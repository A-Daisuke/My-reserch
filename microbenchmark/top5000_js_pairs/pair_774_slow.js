const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2;
        for (VAR_2 = 0; VAR_2 < 20000; VAR_2++) {
          VAR_1.push("a");
          VAR_1.push(VAR_2);
        }
        var VAR_3 = VAR_1.join("");
    }
};