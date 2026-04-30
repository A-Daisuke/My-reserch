const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 7000; VAR_2++) {
          VAR_1.push({ KEY_1: "name" + VAR_2 });
        }
        VAR_1.forEach((VAR_3) => (VAR_2.VAR_4 = true));
    }
};