const Benchmark = {
    run: function() {
        var VAR_1 = 1000,
          VAR_2 = "transform me to pascal case",
          VAR_3;
        for (VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
          VAR_2
            .split(" ")
            .map(function (VAR_5) {
              return VAR_5.charAt(0).toUpperCase() + VAR_5.substr(1);
            })
            .join("");
        }
    }
};