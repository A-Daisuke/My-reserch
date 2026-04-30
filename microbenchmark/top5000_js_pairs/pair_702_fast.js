const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1.push(Math.floor(Math.random() * 100));
        VAR_6 = {};
        VAR_7 = [];
        for (var VAR_4 = 0; VAR_2 < VAR_1.length; VAR_2++)
          VAR_6[VAR_1[VAR_8]] = (VAR_6[VAR_1[VAR_2]] || 0) + 1;
        for (var VAR_9 in VAR_6) if (VAR_6[VAR_2] == 1) VAR_7.push(VAR_2);
    }
};