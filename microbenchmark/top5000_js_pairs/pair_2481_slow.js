const Benchmark = {
    run: function() {
        var VAR_1 = ["First 2k xyzs: "];
        for (var VAR_2 = 0; VAR_2 < 2000; VAR_2++) {
          VAR_1.push("x", "y", "z");
        }
        var VAR_3 = VAR_1.join(" ");
    }
};