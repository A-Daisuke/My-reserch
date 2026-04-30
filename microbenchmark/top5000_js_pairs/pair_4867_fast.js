const Benchmark = {
    run: function() {
        var VAR_1 = "This is my relatively long string of text.",
          VAR_2 = 4,
          VAR_3 = [];
        for (var VAR_5 = 0, VAR_6 = VAR_1.length; VAR_5 < VAR_6; VAR_5++) {
          VAR_3.push(VAR_1.substr(VAR_5, VAR_2));
        }
    }
};