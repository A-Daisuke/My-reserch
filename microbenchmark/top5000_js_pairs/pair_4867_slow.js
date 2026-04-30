const Benchmark = {
    run: function() {
        var VAR_1 = "This is my relatively long string of text.",
          VAR_2 = 4,
          VAR_3 = [];
        var VAR_4 = VAR_1.split("");
        for (var VAR_5 = 0, VAR_6 = VAR_1.length; VAR_5 < VAR_6; VAR_5++) {
          VAR_3.push(VAR_4.slice(VAR_5, VAR_5 + VAR_2).join(""));
        }
    }
};