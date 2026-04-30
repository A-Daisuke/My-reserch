const Benchmark = {
    run: function() {
        var VAR_1 = ["First 20 fibonacci numbers:"];
        for (var VAR_2 = 0; VAR_2 < 500; VAR_2++) {
          VAR_1.push(VAR_2, " = ", 5 * VAR_2);
        }
        var VAR_3 = VAR_1.join("\n");
    }
};