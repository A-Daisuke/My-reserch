const Benchmark = {
    run: function() {
        var VAR_1 = 8192;
        var VAR_2 = VAR_1;
        var VAR_3 = new Array(VAR_1);
        var VAR_4 = Math.random();
        while (VAR_2 > 0) VAR_3[--VAR_2] = VAR_4;
        var VAR_5;
        VAR_2 = VAR_1;
        while (
          VAR_4 === VAR_3[VAR_2 - 1] &&
          VAR_4 === VAR_3[VAR_2 - 2] &&
          VAR_4 === VAR_3[VAR_2 - 3] &&
          VAR_4 === VAR_3[VAR_2 - 4] &&
          VAR_4 === VAR_3[VAR_2 - 5] &&
          VAR_4 === VAR_3[VAR_2 - 6] &&
          VAR_4 === VAR_3[VAR_2 - 7] &&
          VAR_4 === VAR_3[(VAR_2 -= 8)]
        );
        VAR_5 = VAR_2 === 0;
    }
};