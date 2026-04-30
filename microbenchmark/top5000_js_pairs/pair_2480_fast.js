const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 0;
        while (VAR_2 < 10000) {
          VAR_1.push(Math.floor(Math.random() * 255));
          VAR_2++;
        }
        var VAR_3 = "",
          VAR_4 = "",
          VAR_5 = "",
          VAR_6 = VAR_1.length;
        for (var VAR_8 = 0; VAR_2 < VAR_6; VAR_2++) {
          VAR_5 = VAR_1[VAR_2];
          VAR_4 = VAR_5.toString(16);
          if (VAR_5 < 16) VAR_4 = "0" + VAR_4;
          VAR_3 += VAR_4;
        }
    }
};