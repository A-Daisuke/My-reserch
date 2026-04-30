const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_4 = 0;
        for (var VAR_5 = 0; VAR_5 < 10000; ++VAR_5) {
          VAR_1 = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
          ];
          VAR_4 += VAR_1.length;
        }
    }
};