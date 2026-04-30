const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 8750; VAR_2++) {
          VAR_1.push(
            (Math.sin(Math.random()) * Math.cos(Math.random())) / Math.random(),
          );
        }
        VAR_1.sort(function (VAR_7, VAR_8) {
          return VAR_7 - VAR_8;
        });
    }
};