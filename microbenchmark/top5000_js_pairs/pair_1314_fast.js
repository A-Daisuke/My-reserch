const Benchmark = {
    run: function() {
        var VAR_1 = [
          "1Cabbage",
          "1Turnip",
          "1Radish",
          "1Carrot",
          "2Cabbage",
          "2Turnip",
          "2Radish",
          "2Carrot",
          "3Cabbage",
          "3Turnip",
          "3Radish",
          "3Carrot",
        ];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.includes("2Cabbage");
        }
    }
};