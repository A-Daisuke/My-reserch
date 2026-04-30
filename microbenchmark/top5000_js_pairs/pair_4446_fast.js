const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10000);
        var VAR_2 = 50;
        for (var VAR_4 = 0, VAR_5 = VAR_1.length; VAR_4 < VAR_5; ++VAR_4) {
          VAR_6 = Math.floor(VAR_4 / VAR_2);
        }
    }
};