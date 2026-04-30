const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 50000,
          VAR_3 = 0,
          VAR_4,
          VAR_5;
        while (VAR_3 < VAR_2) {
          VAR_4 = {};
          VAR_4.VAR_6 = "foobar";
          VAR_4.VAR_7 = "red";
          VAR_4.VAR_8 = VAR_3;
          VAR_1.push(VAR_4);
          VAR_3 += 1;
        }
        VAR_5 = VAR_1.slice(0).sort(function (VAR_9, VAR_10) {
          return VAR_10.VAR_8 - VAR_9.VAR_8;
        })[0];
    }
};