const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(parseInt(Math.random() * 30000));
        }
        var VAR_3 = VAR_1.sort(function (VAR_4, VAR_5) {
          return VAR_5 - VAR_3;
        })[0];
        console.log(VAR_3);
    }
};