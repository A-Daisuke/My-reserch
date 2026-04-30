const Benchmark = {
    run: function() {
        var VAR_1 = new Array();
        for (
          var VAR_2 = 0;
          VAR_2 < Math.floor(Math.random() * 10000) + 10000;
          VAR_2++
        )
          VAR_1.push(Math.random());
        for (var VAR_3 in VAR_1) VAR_1[VAR_3];
    }
};