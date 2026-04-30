const Benchmark = {
    run: function() {
        var VAR_1 = ["First 20 squares"];
        for (var VAR_2 = 0; VAR_2 < 200; VAR_2++) {
          VAR_1.push(VAR_2, " = ", VAR_2 * VAR_2);
        }
        var VAR_3 = VAR_1.join("");
    }
};