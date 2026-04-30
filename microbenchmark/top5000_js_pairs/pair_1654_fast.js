const Benchmark = {
    run: function() {
        var VAR_1 = new Array();
        for (
          var VAR_2 = 0;
          VAR_2 < Math.floor(Math.random() * 10000) + 10000;
          VAR_2++
        )
          VAR_1.push(Math.random());
        for (var VAR_4 = 0; VAR_4 < VAR_1.length; VAR_4++) VAR_1[VAR_4];
    }
};