const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var VAR_3 = VAR_1.reduce(function (VAR_4, VAR_5) {
          VAR_5 =
            Object.prototype.toString
              .call(VAR_5)
              .split(/\s/)[1]
              .slice(0, -1)
              .toLowerCase() === "string"
              ? parseInt(VAR_5)
              : VAR_5;
          return VAR_4 + VAR_5;
        });
    }
};