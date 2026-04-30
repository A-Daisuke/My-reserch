const Benchmark = {
    run: function() {
        var VAR_1 = ["a", "b", "c", "d", "e"];
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 999; VAR_3++) {
          VAR_2.push("test");
        }
        VAR_2.join("");
    }
};