const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        var VAR_2 = 1000000;
        var VAR_3 = ((VAR_4, VAR_5) =>
          [...new Array(VAR_1)].map(() => Math.round(Math.random() * VAR_2)))(
          VAR_1,
          VAR_2,
        );
        var VAR_9 = new Uint32Array(VAR_3);
        var VAR_10 = VAR_9[0];
        for (let VAR_11 = 0; VAR_11 < VAR_9.length; VAR_11++) {
          if (VAR_9[VAR_11] > VAR_10) {
            VAR_10 = VAR_9[VAR_11];
          }
        }
    }
};