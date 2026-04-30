const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = "";
        for (var VAR_3 = 0, VAR_4 = 10000; VAR_3 < VAR_4; VAR_3++) {
          VAR_1.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        }
        VAR_2 = VAR_1.join("");
    }
};