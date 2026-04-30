const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 1000;
        var VAR_3 = VAR_2;
        while (VAR_3--) VAR_1.push(VAR_3);
        var VAR_4 = "";
        for (var VAR_5 = 0; VAR_5 != VAR_1.length; ++VAR_5) {
          VAR_4 += VAR_1[VAR_5];
        }
    }
};