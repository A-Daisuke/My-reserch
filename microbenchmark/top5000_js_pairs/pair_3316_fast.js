const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [
            "111",
            "222",
            "333",
            "444",
            "555",
            "666",
            "777",
            "888",
            "999",
            "000",
          ],
          VAR_3 = /(111|222|333|444|555|666|777|888|999|000)/;
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          VAR_1.push("domain_" + VAR_4 + Math.random());
        }
        for (var VAR_5 = 0, VAR_6; (VAR_6 = VAR_1[VAR_4++]); ) {
          for (var VAR_7 = 0, VAR_8; (VAR_8 = VAR_2[VAR_7++]); ) {
            if (VAR_6.indexOf(VAR_8) > -1) {
            }
          }
        }
    }
};