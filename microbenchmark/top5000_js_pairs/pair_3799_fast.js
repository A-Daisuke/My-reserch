const Benchmark = {
    run: function() {
        VAR_1 = [];
        VAR_2 = ["Matt", "Tom", "Lucy", "Sally"];
        var VAR_10;
        for (var VAR_11 = 0; VAR_11 < 100; VAR_11++) {
          VAR_10 = {
            KEY_1: VAR_2[VAR_11 % VAR_2.length],
            KEY_2: VAR_11,
            KEY_3: 20 + (VAR_11 % 10),
          };
          VAR_1.push(VAR_10);
          if (VAR_11 > 0) {
            VAR_10["previous"] = VAR_1[VAR_11 - 1];
          }
        }
    }
};