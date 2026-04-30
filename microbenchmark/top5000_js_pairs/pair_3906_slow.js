const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          KEY_2: [],
        };
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.KEY_2.push(VAR_2);
        }
        var VAR_3 = ["is_small", "is_large", "is_undefined"];
        var VAR_4 = VAR_3.length;
        for (var VAR_5 = 0; VAR_2 < VAR_4; VAR_2++) {
          if (typeof VAR_1[VAR_3[VAR_2]] === "object") {
            console.log("typ");
          }
        }
    }
};