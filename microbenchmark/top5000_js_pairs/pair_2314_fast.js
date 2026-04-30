const Benchmark = {
    run: function() {
        var VAR_1 = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
        VAR_1 += VAR_1 + VAR_1 + VAR_1 + VAR_1;
        VAR_1 += VAR_1 + VAR_1 + VAR_1 + VAR_1;
        var VAR_2 = ["a", "b", "c", "qq", "w", "ee", "r", "xx"];
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_2.push("a", "b", "c", "qq", "w", "ee", "r", "xx");
        }
        for (VAR_3 = 0; VAR_3 < VAR_2.length; VAR_3++) {
          VAR_1 = VAR_1 + "<td>" + VAR_2[VAR_3] + "</td>";
        }
    }
};