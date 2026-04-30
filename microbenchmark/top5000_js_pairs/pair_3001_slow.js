const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        var VAR_2 = 1000000;
        var VAR_3 = ((VAR_4, VAR_5) =>
          [...new Array(VAR_1)].map(() => Math.round(Math.random() * VAR_2)))(
          VAR_1,
          VAR_2,
        );
        var VAR_6 = VAR_3.reduce((VAR_7, VAR_8) => (VAR_8 > VAR_7 ? VAR_8 : VAR_7), VAR_3[0]);
    }
};