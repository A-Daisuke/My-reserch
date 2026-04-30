const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 1000;
        var VAR_3 = VAR_2;
        while (VAR_3--) VAR_1.push(VAR_3);
        var VAR_4 = "";
        for (var VAR_6 = 0; VAR_6 != VAR_1.length; ++VAR_6) {
          VAR_4 += VAR_1[VAR_6];
        }
    }
};