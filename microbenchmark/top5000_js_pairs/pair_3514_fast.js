const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000);
        var VAR_6 = "";
        for (var VAR_3 = 0, VAR_4 = VAR_1.length; VAR_3 < VAR_4; VAR_3++) {
          VAR_6 += VAR_3 + "";
        }
    }
};