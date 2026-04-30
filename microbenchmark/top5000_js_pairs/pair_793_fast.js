const Benchmark = {
    run: function() {
        var VAR_1 = "[[TOOLTIP_VOCA_KEY]]";
        var VAR_3 = VAR_1.length;
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.substr(2, VAR_3 - 4);
        }
    }
};