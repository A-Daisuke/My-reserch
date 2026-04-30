const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10000);
        var VAR_2 = 50,
          VAR_3 = 0;
        for (var VAR_4 = 0, VAR_5 = VAR_1.length; VAR_4 < VAR_5; ++VAR_4, ++VAR_3) {
          if (0 === VAR_4 % VAR_2) {
            --VAR_3;
          }
          VAR_4 - VAR_3;
        }
    }
};