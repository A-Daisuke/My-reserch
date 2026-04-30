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
        VAR_8.sort();
        var VAR_10 = VAR_8.VAR_6;
        for (var VAR_11 = 0; VAR_5 < VAR_10; VAR_5++) {
          VAR_1 += VAR_2[VAR_8[VAR_5]];
        }
    }
};