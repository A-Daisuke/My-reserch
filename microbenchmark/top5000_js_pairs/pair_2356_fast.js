const Benchmark = {
    run: function() {
        var VAR_4 = [];
        var VAR_5 = 10000;
        while (VAR_5--) VAR_4.push((Math.random() * 10000) / 3);
        var VAR_6 = 3;
        var VAR_7 = 10000;
        while (VAR_7--) Math.round(VAR_4[VAR_7] * VAR_6) / VAR_6;
    }
};