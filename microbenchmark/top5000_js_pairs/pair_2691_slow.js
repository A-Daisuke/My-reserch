const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 0;
        for (; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var VAR_3 = 0;
        for (; VAR_3 < VAR_1.length; VAR_3++) {
          var VAR_4 = VAR_1[VAR_3];
          (function (VAR_5, VAR_6) {
            VAR_6 + VAR_6 * VAR_6;
            VAR_5 + VAR_5 * VAR_5;
          })(VAR_4, VAR_3);
        }
    }
};