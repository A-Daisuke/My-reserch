const Benchmark = {
    run: function() {
        var VAR_1 = 1000 * 1000;
        var VAR_2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var VAR_3 = VAR_2.length,
          VAR_4 = VAR_1 - VAR_3;
        (VAR_5 = Math.floor(VAR_4 / VAR_3)), (VAR_6 = VAR_4 % VAR_3), (VAR_7 = VAR_2.slice());
        for (var VAR_8 = VAR_5; VAR_8--; ) {
          VAR_2.push.apply(VAR_2, VAR_7);
        }
        VAR_2.push.apply(VAR_2, VAR_2.slice(0, VAR_6));
    }
};