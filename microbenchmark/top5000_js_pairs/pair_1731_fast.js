const Benchmark = {
    run: function() {
        var VAR_1 = new Array();
        for (
          var VAR_2 = 0;
          VAR_2 < Math.floor(Math.random() * 10000) + 10000;
          VAR_2++
        )
          VAR_1.push(Math.random());
        VAR_4 = VAR_1.length;
        for (var VAR_5 = 0; VAR_5 < VAR_4; VAR_5++) VAR_1[VAR_5];
    }
};