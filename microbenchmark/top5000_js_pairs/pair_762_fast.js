const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        VAR_2[100000] = 5;
        var VAR_3 = 0;
        var VAR_4 = 50000;
        var VAR_5 = VAR_4;
        var VAR_6 = Math.ceil(VAR_2.length / VAR_4);
        for (var VAR_7 = 0; VAR_7 < VAR_6; VAR_7++) {
          Array.prototype.push.apply(VAR_1, VAR_2.slice(VAR_3, VAR_5));
          VAR_3 += VAR_4;
          VAR_5 += VAR_4;
        }
    }
};