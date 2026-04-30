const Benchmark = {
    run: function() {
        var VAR_1 = "Lorem ipsum dolor sit amet";
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.split("");
        }
    }
};