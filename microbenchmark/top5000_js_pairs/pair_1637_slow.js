const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 10000; ++VAR_3)
          VAR_2.push(
            function (VAR_4) {
              return (VAR_1 += VAR_3);
            }.bind(null, VAR_3),
          );
        while (VAR_2.length) VAR_2.shift()();
    }
};