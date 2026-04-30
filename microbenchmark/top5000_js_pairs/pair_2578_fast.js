const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push("this is some sentence in a doc bla bla " + VAR_2);
        }
        VAR_1.slice().forEach(function (VAR_4, VAR_5) {
          return VAR_4 === VAR_1[VAR_2];
        });
    }
};