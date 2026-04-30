const Benchmark = {
    run: function() {
        var VAR_4 = new Uint16Array(90000);
        var VAR_5 = 0;
        for (var VAR_2 = 0, VAR_3 = 10000; VAR_2 < VAR_3; ++VAR_2) {
          VAR_4.set([VAR_2, VAR_2 + 1, VAR_2 + 2, VAR_2 + 3, VAR_2 + 4, VAR_2 + 5, VAR_2 + 6, VAR_2 + 7, VAR_2 + 8], VAR_5);
          VAR_5 += 9;
        }
    }
};