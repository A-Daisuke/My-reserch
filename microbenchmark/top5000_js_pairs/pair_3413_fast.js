const Benchmark = {
    run: function() {
        var VAR_5 = "";
        for (var VAR_3 = 0, VAR_4 = 1000; VAR_3 < VAR_4; VAR_3++) {
          VAR_5 += "This string could be anything, including <strong>HTML</strong>";
        }
    }
};