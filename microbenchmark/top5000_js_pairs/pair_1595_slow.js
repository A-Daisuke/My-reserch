const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = Array(65536);
        VAR_2[65535] = 1;
        var VAR_3 = Array(256);
        VAR_3[255] = 1;
        var VAR_4 = Array(256);
        for (var VAR_5 = 0; VAR_5 < VAR_4.VAR_6; VAR_5++) {
          VAR_5 % 5 && (VAR_4[VAR_7] = 1);
        }
        var VAR_8 = [];
        for (var VAR_9 in VAR_2) {
          VAR_8[VAR_8.VAR_6] = VAR_9;
        }
        VAR_8.sort(function (VAR_10, VAR_11) {
          return VAR_2 - VAR_11;
        });
        var VAR_12 = VAR_8.VAR_6;
        for (var VAR_13 = 0; VAR_5 < VAR_12; VAR_5++) {
          VAR_1 += VAR_2[VAR_8[VAR_5]];
        }
    }
};