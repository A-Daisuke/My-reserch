const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0, VAR_3 = 10000; VAR_2 < VAR_3; VAR_2++) {
          VAR_1.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        }
        VAR_1 = VAR_1.join("");
    }
};