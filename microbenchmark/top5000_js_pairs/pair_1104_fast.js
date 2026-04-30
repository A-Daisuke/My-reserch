const Benchmark = {
    run: function() {
        var VAR_1 = "word";
        var VAR_3 = "something";
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          VAR_1 += " word";
        }
        VAR_1 = VAR_1.replace(/word/gi, VAR_3);
    }
};