const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [1, 2, 3, 4, 5, 6];
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          (function () {
            var VAR_4 = [0, 0, 0, 0, 0, 0];
            VAR_1.push(function (VAR_5, VAR_6, VAR_7, VAR_8, VAR_9, VAR_10) {
              VAR_4[0] = VAR_5;
              VAR_4[1] = VAR_6;
              VAR_4[2] = VAR_7;
              VAR_4[3] = VAR_8;
              VAR_4[4] = VAR_9;
              VAR_4[5] = VAR_10;
            });
          })();
        }
        var VAR_11 = VAR_1.length;
        while (VAR_3--) {
          VAR_1[VAR_3].apply(null, VAR_2);
        }
    }
};