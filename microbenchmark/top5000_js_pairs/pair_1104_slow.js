const Benchmark = {
    run: function() {
        var VAR_1 = "word";
        var VAR_2 = "word";
        var VAR_3 = "something";
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          VAR_1 += " word";
        }
        var VAR_5 = VAR_1.indexOf(VAR_2);
        while (VAR_5 !== -1) {
          VAR_1 = VAR_1.substr(0, VAR_5) + VAR_3 + VAR_1.substr(VAR_5 + VAR_2.length);
          VAR_5 = VAR_1.indexOf(VAR_2);
        }
    }
};