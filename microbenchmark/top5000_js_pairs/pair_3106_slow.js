const Benchmark = {
    run: function() {
        var VAR_1 = ["a", "b", "c"];
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          VAR_1 = VAR_1.concat(["d", "e", "f"]);
        }
        var VAR_3 = VAR_1.join("");
    }
};