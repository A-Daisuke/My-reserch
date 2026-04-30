const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [],
          VAR_3 = [];
        for (var VAR_4 = 0; VAR_4 < 50; VAR_4++) {
          VAR_1.push(Math.PI);
          VAR_2.push(Math.floor(Math.PI * 1000) / 1000);
          VAR_3.push(Math.floor(Math.PI * 1000));
        }
        JSON.stringify(VAR_1);
    }
};