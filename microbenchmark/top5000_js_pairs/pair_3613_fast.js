const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0, VAR_3 = 400; VAR_2 < VAR_3; VAR_2++) {
          VAR_1.push(Math.round(Math.random() * VAR_3));
        }
        var VAR_4 = VAR_1.length;
        do {
          var VAR_5 = VAR_1.pop();
          VAR_4 = VAR_1.length;
        } while (VAR_4 > 0);
    }
};