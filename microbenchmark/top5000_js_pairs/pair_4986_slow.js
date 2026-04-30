const Benchmark = {
    run: function() {
        var VAR_1 = [10, 23, 41, 13],
          VAR_2 = [
            1, 7, 13, 22, 36, 42, 55, 60, 72, 88, 90, 103, 123, 158, 200, 222, 323, 443,
            501, 545, 610, 728, 880, 891, 903, 919, 1001, 2011,
          ];
        VAR_3 = (function () {
          var VAR_4 = [];
          for (var VAR_5 = 0; VAR_5 < 200; VAR_5++) {
            VAR_4.push(~~(Math.random() * 1000));
          }
          return VAR_4;
        })();
        eval(VAR_1.join("+"));
        eval(VAR_2.join("+"));
        eval(VAR_3.join("+"));
    }
};