const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        var VAR_2 = 1000000;
        var VAR_3 = ((VAR_4, VAR_5) =>
          [...new Array(VAR_1)].map(() => Math.round(Math.random() * VAR_2)))(
          VAR_1,
          VAR_2,
        );
        var VAR_6 = new Uint32Array(VAR_3);
        var VAR_7 = VAR_3[0];
        for (let VAR_10 = 0; VAR_10 < VAR_3.length; VAR_10++) {
          VAR_7 = Math.max(VAR_7, VAR_3[VAR_10]);
        }
    }
};